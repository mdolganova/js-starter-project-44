const checkAnswer = (answer, right, name) => {
  let message;
  let result;
  if (answer === right) {
    message = "Correct!";
    result = true;
  } else {
    message = `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;
    result = false;
  }
  console.log(message);
  return result;
};

export default checkAnswer;
