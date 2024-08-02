import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

const evenGame = () => {
  const greetingPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';

  const question = () => getRandomInt(0, 101);

  const right = (check) => {
    const even = (check % 2);
    const result = (even) ? 'no' : 'yes';
    return result;
  };

  game(greetingPhrase, question, right);
};

export default evenGame;
