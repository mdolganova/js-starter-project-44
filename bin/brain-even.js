#!/usr/bin/env node
import greeting from "../src/greeting.js";
import getRandomInt from "../src/getRandomInt.js";
import playGame from "../src/playGame.js";

const greetingPhrase =
  'Answer "yes" if the number is even, otherwise answer "no".';
const name = greeting(greetingPhrase);

const rounds = 3;
const question = () => {
  return getRandomInt(0, 101);
};
const right = (question) => {
  return question % 2 ? "no" : "yes";
};
const result = playGame(name, rounds, question, right);
if (result) {
  console.log(result);
}
