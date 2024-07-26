import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
};

const getEvenAnswer = () => {
  const number = getRandomInt(0, 101);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");
  const result = [];
  result[0] = number;
  result[1] = answer;
  return result;
};

const checkEvenAnswer = (answer, name) => {
  const [number, check] = answer;
  const right = number % 2 ? "no" : "yes";
  let message;
  let result;
  if (check === right) {
    message = "Correct!";
    result = true;
  } else {
    message = `'${check}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;
    result = false;
  }
  console.log(message);
  return result;
};

export { getEvenAnswer, checkEvenAnswer };
