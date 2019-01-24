import {
  TIME,
  TIME_INTERVAL,
  BLINK_TIME,
  AnswerType
} from "../game-data/constants";
import HeaderView from "../views/game-page-views/header-view";
import QuestionViewClassify from "../views/question-views/question-classify-view";
import QuestionViewChoose from "../views/question-views/question-choose-view";
import FooterView from "../views/game-page-views/footer-view";

export default class GameScreen {
  constructor(model, debug = false) {
    this.model = model;
    this._interval = null;
    this._debug = debug;

    this.header = this.createHeaderView();
    this.content = this.createQuestionView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }

  createQuestionView() {
    const question = this.model.renewQuestionType();
    const questionType = question.category;

    const questionTypeMap = {
      classify: QuestionViewClassify,
      choose: QuestionViewChoose
    };

    const QuestionViewClass = questionTypeMap[questionType];
    const questionView = new QuestionViewClass(
        question,
        this.model.gamePreloadedImages,
        this.model.gameState
    );

    questionView.onAnswer = (result) => {
      this.onAnswer(result);
      this.changeGameLevel();
    };

    questionView.onDebug(this._debug);

    return questionView;
  }

  createHeaderView() {
    const headerView = new HeaderView(this.model.gameState);
    headerView.onLogoClick = () => this.showModal();
    return headerView;
  }

  startTimer() {
    this._interval = setInterval(() => {
      this.model.tick();
      if (this.model.gameState.time === BLINK_TIME) {
        this.header.blink(true);
      }
      if (!this.model.gameState.time) {
        this.onAnswer(false);
        this.changeGameLevel();
      } else {
        this.updateTimer();
      }
    }, TIME_INTERVAL);
  }

  clearTimer() {
    clearInterval(this._interval);
    this.header.blink(false);
  }

  changeGameLevel() {
    this.clearTimer();
    this.header.blink(false);
    this.model.goToNextLevel();

    if (this.model.isDead() || this.model.isGameComplete()) {
      this.showNextScreen();
    } else {
      this.updateScreen();
    }
  }

  onAnswer(result) {
    let answer;
    const answerTime = TIME.MAX_TIME - this.model.gameState.time;
    const answerResult = result;

    if (answerResult) {
      if (answerTime < TIME.QUICK) {
        answer = AnswerType.FAST;
      } else if (answerTime > TIME.SLOW) {
        answer = AnswerType.SLOW;
      } else {
        answer = AnswerType.CORRECT;
      }
    } else {
      answer = AnswerType.WRONG;
    }

    if (answer === AnswerType.WRONG) {
      this.model.die();
    }

    this.model.gameState.answers.push(answer);
  }

  updateQuestion() {
    const nextQuestionView = this.createQuestionView();
    this.root.replaceChild(nextQuestionView.element, this.content.element);
    this.content = nextQuestionView;
  }

  updateTimer() {
    this.header.update(this.model.gameState.time, this.model.gameState.lives);
  }

  updateScreen() {
    this.model.renewTimer();
    this.updateQuestion();
    this.startTimer();
  }

  showNextScreen() {}
  showModal() {}
}
