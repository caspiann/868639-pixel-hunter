export const mainPage = document.querySelector(`#main`);
const TIME_INTERVAL = 1000;

export const showScreen = (element) => {
  mainPage.innerHTML = ``;
  mainPage.appendChild(element);
};

export const createElement = (html) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html;
  return wrapper;
};

export const showModal = (element) => {
  document.body.appendChild(element);
};

export const showScreenWithAnimation = (element) => {
  mainPage.firstChild.classList.add(`hide-animation`);
  element.classList.add(`show-animation`);
  setTimeout(() => showScreen(element), TIME_INTERVAL);
};
