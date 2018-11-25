const mainElement = document.querySelector(`main`);

const createElementFromTemplate = (templateString) => {
  mainElement.innerHTML = templateString;
};

export default createElementFromTemplate;
