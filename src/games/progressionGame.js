import getRandomInt from "../getRandomInt.js";
import game from "../index.js";

const progressionGame = () => {
  const greetingPhrase = "What number is missing in the progression?";

  const question = () => {
    const start = getRandomInt(0, 101);
    const step = getRandomInt(1, 11);
    const count = getRandomInt(5, 11);
    const hide = getRandomInt(0, count);
    const end = start + step * (count - 1);
    let elements = [];
    for (let i = start; i <= end; i += step) {
      elements.push(i);
    }
    elements[hide] = "..";
    const expression = elements.join(" ");
    return expression;
  };

  const right = (question) => {
    const elements = question.split(" ");
    const position = elements.indexOf("..");
    let hide;
    let step;
    let i = 0;
    while (!step) {
      if (elements[i] !== ".." && elements[i + 1] !== "..") {
        step = parseInt(elements[i + 1]) - parseInt(elements[i]);
      }
      i += 1;
    }
    if (position === 0) {
      hide = parseInt(elements[1]) - step;
    } else {
      hide = parseInt(elements[position - 1]) + step;
    }
    return hide.toString();
  };

  game(greetingPhrase, question, right);
};

export default progressionGame;
