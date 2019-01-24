import IntroView from "../views/start-game-views/intro-view";
import FooterView from "../views/game-page-views/footer-view";

export default class IntroScreen {
  constructor() {
    this.content = new IntroView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }
}
