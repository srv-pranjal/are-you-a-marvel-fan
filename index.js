const chalk = require("chalk");
const readlineSync = require("readline-sync");

let score = 0;
let highScore = [{ name: "Pranjal", score: "3" }];
let userName;

function formQuestionAnswerPair(question, answer) {
  return {
    question,
    answer,
  };
}
let questions = [
  formQuestionAnswerPair(
    `Who do you think was not in Iron Man's team in Captain America:Civil War?
  a:Vision
  b:Black Panther
  c:Hawkeye
  d:Warmachine\n`,
    "c"
  ),
  formQuestionAnswerPair(
    `CAPTAIN MARVEL: What is Carol's nickname for Monica?
  a:Sergeant Danger
  b:Commander Monica
  c:Lieutenant Trouble
  d:General Mo\n`,
    "c"
  ),
  formQuestionAnswerPair(
    `When did the dialogue "on your left" appears in Marvel before appearing in Avengers: Endgame?
  a:Captain America: The First Avenger
  b:Captain America: The Winter Soldier
  c:Avengers: Infinity War
  d:Captain America:Civil War\n`,
    "b"
  ),
  formQuestionAnswerPair(
    `When did the events of WandaVision appear in MCU?
  a:Just Before Civil War
  b:Just After spiderman approaches Dr. Strange for help
  c:Just Before Thanos's attack
  d:Just After Avengers beat Thanos\n`,
    "d"
  ),
  formQuestionAnswerPair(
    `What is the real name of the Black Panther??
  a:T’Challa
  b:M’Baku
  c:N’Jadaka
  d:N’Jobu\n`,
    "a"
  ),
];

function welcomeUser() {
  userName = readlineSync.question(chalk.yellow("Hi, What is your Name?\n"));
  console.log(
    chalk.yellow(
      "Welcome " + userName + ", Let's see how much you know about Marvel!"
    )
  );
}

function askQuestion(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (
    userAnswer.toUpperCase().replace(" ", "") ===
    answer.toUpperCase().replace(" ", "")
  ) {
    score++;
    console.log(chalk.green("\nThat's correct!!"));
  } else {
    console.log(chalk.red("\nWRONG!"));
  }
}

function startGame() {
  for (let item = 0; item < questions.length; item++) {
    askQuestion(questions[item].question, questions[item].answer);
    console.log("current score : " + chalk.yellow(score) + "\n-----------");
  }
  highScore[1] = { name: userName, score: score };
}

function displayScores() {
  console.log(
    chalk.bold.yellowBright("\nTHANKS FOR PLAYING!\nFinal Score = " + score)
  );
  console.log("\nLet's see the highscores\n{");
  highScore.map((score) => console.log(" " + score.name + " : " + score.score));
  console.log("}");
}

welcomeUser();
startGame();
displayScores();
