import readlineSync from "readline-sync";

const greeting = (question) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(question);
  return userName;
};

export default greeting;
