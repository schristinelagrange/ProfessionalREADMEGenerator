// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log("Hello, answer the following questions to generate your README File:");

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Project Desciption:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "install",
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Testing Instructions:",
        name: "test",
    },
    {
        type: "checkbox",
        message: "Choose a License for your project:",
        name: "license",
        choices: ["BSD", "MIT", "GPL"]
    },
    {
        type: "input",
        message: "Your Github Username:",
        name: "questions1",
    },
    {
        type: "input",
        message: "Your Email Address",
        name: "questions2",
    },
    {
        type: "input",
        message: "Provide instructions for how people can reach out to you with additional questions:",
        name: "questions3",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { 
        if (err) { 
            return console.log (Error);} 

    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(input) {
        console.log(input);
        writeToFile("README.md", generateMarkdown (input));
    })
};

// Function call to initialize app
init();



