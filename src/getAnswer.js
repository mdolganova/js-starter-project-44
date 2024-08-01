import readlineSync from "readline-sync";

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question("Your answer: ");
  return answer;
};

export default getAnswer;
