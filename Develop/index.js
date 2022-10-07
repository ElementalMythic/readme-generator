// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Project Title:',
    'GitHub Username:',
    'Email Address:',
    'Enter Instructions Here:',
    'Enter Usage Information Here:',
    'Enter Contribution Information Here:',
    'Enter Instructions Here:',
    'Select License:',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('README.md', data,
    (err) => err ? console.log("Error") : console.log('README.md Successfully Created'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
