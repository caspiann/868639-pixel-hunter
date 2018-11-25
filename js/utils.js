import renderGreetingElement from './greeting';


const returnToGreetingScreen = () => {
  const returnButtonElement = document.querySelector(`.back`);
  returnButtonElement.addEventListener(`click`, () => {
    renderGreetingElement();
    returnButtonElement.removeEventListener(`click`, renderGreetingElement);
  });
};

export default returnToGreetingScreen;
