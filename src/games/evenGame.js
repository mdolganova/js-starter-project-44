import getRandomInt from "../getRandomInt.js";
import game from "../index.js";

const evenGame = () => {
  const greetingPhrase =
    'Answer "yes" if the number is even, otherwise answer "no".';

  const question = () => {
    return getRandomInt(0, 101);
  };

  const right = (question) => {
    return question % 2 ? "no" : "yes";
  };

  game(greetingPhrase, question, right);
};

export default evenGame;
