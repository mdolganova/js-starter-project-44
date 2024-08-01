import getAnswer from "../src/getAnswer.js";
import checkAnswer from "../src/checkAnswer.js";

const playGame = (name, rounds, question, right) => {
  let win = false;
  let count = 0;
  do {
    const newQuestion = question(0, 101);
    const newRight = right(newQuestion);
    const answer = getAnswer(newQuestion);
    win = checkAnswer(answer, newRight, name);
    count += 1;
  } while (win && count < rounds);

  let congratulations = false;
  if (win && count === rounds) {
    congratulations = `Congratulations, ${name}!`;
  }
  return congratulations;
};

export default playGame;
