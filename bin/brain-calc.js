#!/usr/bin/env node
import greeting from "../src/greeting.js";
import getRandomInt from "../src/getRandomInt.js";
import playGame from "../src/playGame.js";

const greetingPhrase = "What is the result of the expression?";
const name = greeting(greetingPhrase);

const rounds = 3;
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
  const elements = question.split(' ');
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
const result = playGame(name, rounds, question, right);
if (result) {
  console.log(result);
}
