import getRandomInt from "../getRandomInt.js";
import game from "../index.js";

const evenGame = () => {
  const greetingPhrase =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  const question = () => {
    return getRandomInt(0, 101);
  };

  const right = (question) => {
    const number = parseInt(question);
    if (number === 0) {
      return "no";
    }
    if (number === 1) {
      return "yes";
    }
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        return "no";
      }
    }
    return "yes";
  };

  game(greetingPhrase, question, right);
};

export default evenGame;
