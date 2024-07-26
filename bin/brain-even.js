#!/usr/bin/env node

import { getEvenAnswer, checkEvenAnswer } from "../src/evenGame.js";
import { greeting } from "../src/greeting.js";

const name = greeting();

let count = 0;
let answer;
let win = false;
do {
  answer = getEvenAnswer();
  win = checkEvenAnswer(answer, name);
  count += 1;
} while (win && count < 3);

if (win && count === 3) {
  console.log(`Congratulations, ${name}!`);
}
