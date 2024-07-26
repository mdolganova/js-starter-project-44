#!/usr/bin/env node

import { getEvenAnswer, checkEvenAnswer } from "../src/evenGame.js";
import { greeting } from "../src/greeting.js";

const name = greeting();

let count = 0;
let answer;
do {
  answer = getEvenAnswer();
  count += 1;
} while (checkEvenAnswer(answer, name) && count < 3);

if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
