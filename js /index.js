
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('../generateMarkdown')


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
    
      {
        type: "input",
        message: "What is the title for your project?",
        name: "Title",
      },
      {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
      },
      {
        type: "input",
        message: "What necessary dependencies must be installed to run this app?",
        name: "Installation",
      },
      {
        type: "input",
        message: "What is this app used for?",
        name: "Usage",
      },
      {
        type: "input",
        message: "What license was used for this README?",
        name: "License",
      },
    
      {
        type: "input",
        message: "Please add contributors",
        name: "Contributor",
      },
      {
        type: "input",
        message: "What command do you use to test this App?",
        name: "Test",
      }
    ];
        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./demo/"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    console.log("Sucessfully wrote: " + fileName);
    })
    
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md", generateMarkdown(data));
 
    })
}           
// Function call to initialize app
init();