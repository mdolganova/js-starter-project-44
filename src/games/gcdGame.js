import getRandomInt from "../getRandomInt.js";
import game from "../index.js";

const gcdGame = () => {
  const greetingPhrase = "Find the greatest common divisor of given numbers.";

  const question = () => {
    const x = getRandomInt(0, 101);
    const y = getRandomInt(0, 101);
    const expression = `${x} ${y}`;
    return expression;
  };

  const right = (question) => {
    const elements = question.split(" ");
    const x = parseInt(elements[0], 10);
    const y = parseInt(elements[1], 10);
    const iter = Math.min(x, y);
    let max = 1;
    for (let i = 1; i <= iter; i += 1) {
      if (!(x % i) && !(y % i)) {
        max = i;
      }
    }
    return max.toString();
  };

  game(greetingPhrase, question, right);
};

export default gcdGame;