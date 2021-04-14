
//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js");


//Array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            // displays in Copyright section
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
            // displays in Questions section
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            // displays in Questions section
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            // displays as title of README
        },
        {
            type: 'input',
            message: 'Please write a description of your project.',
            name: 'description',
            // displays in Description section
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['APACHE 2.0', 'BSD 3', 'Eclipse 1.0', 'MIT', 'Mozilla 2.0'],
            // (Use arrow keys): MIT, APACHE 2.0, GPL 3.0, BSD 3, None
            // license badge displays at top 
            // license notice displays in License section
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'installation',
            // (npm i)
            // displays in Installation section
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
            // (npm tests)
            // displays in the Tests section
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage',
            // displays in the Usage section
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
            // displays in the Contributing section
        },
    ];
    

//Function to initialize app
async function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        fs.writeFile("GoodReadMe.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Success!!")
        )
    })
};

// Function call to initialize app
init();