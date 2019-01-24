import {createElement} from "../utils/render-element";

export default class AbstractView {
  constructor() {
    if (this.constructor === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.createElement();
    this.bind(this._element);
    return this._element;
  }

  createElement() {
    return createElement(this.template);
  }

  bind() {}
}
