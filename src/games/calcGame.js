import getRandomInt from "../getRandomInt.js";
import game from "../index.js";

const calcGame = () => {
  const greetingPhrase = "What is the result of the expression?";

  const question = () => {
    const operations = ["+", "-", "*"];
    const operationNumber = getRandomInt(0, 3);
    const operation = operations[operationNumber];
    const x = getRandomInt(0, 101);
    const y = getRandomInt(0, 101);
    const expression = `${x} ${operation} ${y}`;
    return expression;
  };

  const right = (question) => {
    const elements = question.split(" ");
    const x = parseInt(elements[0], 10);
    const y = parseInt(elements[2], 10);
    const operand = elements[1];
    let result;
    switch (operand) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      default:
    }
    return result.toString();
  };

  game(greetingPhrase, question, right);
};

export default calcGame;
