import getRandomInt from '../getRandomInt.js';
import game from '../index.js';

const evenGame = () => {
  const greetingPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';

  const question = () => getRandomInt(0, 101);

  const right = (check) => (check % 2) ? 'no' : 'yes';

  game(greetingPhrase, question, right);
};

export default evenGame;
