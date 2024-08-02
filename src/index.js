import greeting from './greeting.js';
import playGame from './playGame.js';

const game = (greetingPhrase, question, right) => {
  const name = greeting(greetingPhrase);

  const rounds = 3;

  const result = playGame(name, rounds, question, right);

  if (result) {
    console.log(result);
  }
};

export default game;
