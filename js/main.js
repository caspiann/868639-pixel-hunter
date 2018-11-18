"use strict";

const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;
const mainElement = document.querySelector(`main`);
const bodyElement = document.querySelector(`body`);
const screenStep = 1;
let currentScreenNumber = 0;
let arrowButtons;

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
    return;
  } else if (index > lastScreenNumber) {
    currentScreenNumber = lastScreenNumber;
    return;
  }
  currentScreenNumber = index;
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

arrowButtons = document.querySelectorAll(`.arrows__btn`);

const buttonChangeScreenHandler = (evt) => {
  let [firstButton, secondButton] = arrowButtons;
  if (evt.target === firstButton) {
    renderScreenHandler(currentScreenNumber - screenStep);
  } else if (evt.target === secondButton) {
    renderScreenHandler(currentScreenNumber + screenStep);
  }
};

renderScreenHandler(currentScreenNumber);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW_CODE:
      renderScreenHandler(currentScreenNumber + screenStep);
      break;
    case LEFT_ARROW_CODE:
      renderScreenHandler(currentScreenNumber - screenStep);
      break;
  }
});

document.addEventListener(`click`, buttonChangeScreenHandler);
