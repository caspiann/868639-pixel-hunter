import createElementFromTemplate from './create-element-from-template';

const modalErrorTemplate =
  `<section class="modal">
    <div class="modal__inner">
      <h2 class="modal__title">Произошла ошибка!</h2>
      <p class="modal__text modal__text--error">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
    </div>
  </section>`;

const renderModalErrorElement = () => {
  createElementFromTemplate(modalErrorTemplate);
};

export default renderModalErrorElement;
