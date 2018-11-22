import createElementFromTemplate from './create-element-from-template';
import renderGreetingElement from './greeting';
const introTemplate =
  `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const renderIntroElement = () => {
  createElementFromTemplate(introTemplate);
  const asteriskElement = document.querySelector(`.asterisk`);
  asteriskElement.addEventListener(`click`, () => {
    renderGreetingElement();
    asteriskElement.removeEventListener(`click`, renderGreetingElement);
  });
};

export default renderIntroElement;
