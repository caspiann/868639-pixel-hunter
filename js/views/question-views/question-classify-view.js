import AbstractViewQuestion from "./abstract-view-question";
import statsBarTemplate from "../../utils/render-status-bar";

export default class QuestionViewClassify extends AbstractViewQuestion {
  constructor(question, gamePreloadedImages, gameState) {
    super();
    this.question = question;
    this.gamePreloadedImages = gamePreloadedImages;
    this.gameState = gameState;
    this.preloadedImagesUrls = [];
  }

  get template() {
    return `
    <section class="game">
      <p class="game__task">${this.question.description}</p>
      <form class="${this.question.inner}">
      ${[...this.question.answers]
        .map(
            (answer, index) => `
        <div class="game__option" data-type="${answer.class}">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question${index +
              1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input class="visually-hidden" name="question${index +
              1}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        `
        )
        .join(``)}
      </form>
      ${statsBarTemplate(this.gameState.answers)}
    </section>
    `;
  }

  bind() {
    const answers = [];

    const gameOptionElements = this.element.querySelectorAll(`.game__option`);
    gameOptionElements.forEach((option, optionIndex) => {
      const optionValue = option.dataset.type;
      const versionElements = option.querySelectorAll(`input`);

      this.insertPreloadedImage(option, optionIndex);

      const correctVersion = [...versionElements].find(
          (version) => version.value === optionValue
      );
      const correctVersionBtnElement = correctVersion.parentNode.querySelector(
          `span`
      );
      correctVersionBtnElement.classList.add(`correct-answer`);

      option.addEventListener(`change`, () => {
        versionElements.forEach((version) => {
          if (version.checked) {
            answers[optionIndex] = version === correctVersion;
          }
        });
        if (
          gameOptionElements.length === answers.length &&
          !answers.includes(undefined)
        ) {
          const result = !answers.includes(false);

          this.onAnswer(result);
        }
      });
    });
  }
}
