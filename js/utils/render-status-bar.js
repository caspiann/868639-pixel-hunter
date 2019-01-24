import {GameConcept} from "../game-data/constants";

export default (answers) =>
  `<ul class="stats">
    ${new Array(GameConcept.MAX_LEVELS)
      .fill()
      .map(
          (answer, index) =>
            `<li class="stats__result stats__result--${
              answers[index] === undefined ? `unknown` : answers[index]
            }"></li>`
      )
      .join(``)}
  </ul>`;
