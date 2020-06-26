const inquirer = require("inquirer");
const fs = require("fs");
// const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("myReadme.md", generateMarkdown(answers));
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(questions);
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("yourReadme.md", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// function to initialize program

// function call to initialize program
init();
