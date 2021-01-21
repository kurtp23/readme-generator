// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
// TODO: Create an array of questions for user input

//  Description, Installation, Usage, Contributing, and Tests

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "pName",
        message: "What is your project's name?",
      },
      {
        type: "input",
        name: "pDescription",
        message: "What is the purpose of your project?",
      },
      {
        type: "input",
        name: "pInstallation",
        message: "How do you install this project?",
      },
      {
        type: "input",
        name: "pUsage",
        message: "How do you use this project?",
      },
      {
        type: "input",
        name: "pContributers",
        message: "Who contributed on this project?",
      },
      {
        type: "input",
        name: "pTests",
        message: "Are there any tests?",
      },
      {
        type: "input",
        name: "year",
        message: "What is the Year?",
      },
      {
        type: "input",
        name: "name",
        message: "What is your full name?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: [
          "MIT License",
          "Apache License 2.0",
          "ISC License",
          "GNU AGPLv3",
          "The Unlicense",
        ],
      },
    ])
    .then((answers) => {
      fs.writeFileSync(`${answers.pName.toUpperCase()}_README.md`, generateReadme(answers));
      console.log(`Saved!`);
    });
}
init();
// Function call to initialize app
