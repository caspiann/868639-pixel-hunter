"use strict";

const mainElement = document.querySelector(`main`);
const bodyElement = document.querySelector(`body`);
const screenStep = 1;
let currentScreenNumber = 0;
const Arrow = {
  LEFT_ARROW_CODE: 37,
  RIGHT_ARROW_CODE: 39
};

const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const screens = [
  wrap(document.querySelector(`#greeting`)),
  wrap(document.querySelector(`#intro`)),
  wrap(document.querySelector(`#rules`)),
  wrap(document.querySelector(`#game-1`)),
  wrap(document.querySelector(`#game-2`)),
  wrap(document.querySelector(`#game-3`)),
  wrap(document.querySelector(`#stats`)),
  wrap(document.querySelector(`#modal-error`)),
  wrap(document.querySelector(`#modal-confirm`))
];

const addScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screens[screen].cloneNode(true));
};

const renderScreenHandler = (index) => {
  const firstScreenNumber = 0;
  const lastScreenNumber = screens.length - 1;
  if (index < firstScreenNumber) {
    currentScreenNumber = firstScreenNumber;
  } else if (index > lastScreenNumber) {
    currentScreenNumber = lastScreenNumber;
  } else {
    currentScreenNumber = index;
  }
  addScreen(currentScreenNumber);
};

const arrows = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;

bodyElement.insertAdjacentHTML(`beforeend`, arrows);

const arrowButtonElements = document.querySelectorAll(`.arrows__btn`);

const buttonChangeScreenHandler = (evt) => {
  const [firstButton, secondButton] = arrowButtonElements;
  if (evt.target === firstButton) {
    renderScreenHandler(currentScreenNumber - screenStep);
  } else if (evt.target === secondButton) {
    renderScreenHandler(currentScreenNumber + screenStep);
  }
};

renderScreenHandler(currentScreenNumber);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Arrow.RIGHT_ARROW_CODE:
      renderScreenHandler(currentScreenNumber + screenStep);
      break;
    case Arrow.LEFT_ARROW_CODE:
      renderScreenHandler(currentScreenNumber - screenStep);
      break;
  }
});

document.addEventListener(`click`, buttonChangeScreenHandler);
