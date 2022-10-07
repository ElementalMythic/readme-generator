const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    'Project Title:',
    'GitHub Username:',
    'Email Address:',
    'Enter Project Description here:',
    'Enter Install Instructions Here:',
    'Enter Usage Information Here:',
    'Enter Contribution Information Here:',
    'Enter Instructions Here:',
    'Select License:',
];

function writeToFile(fileName, data) {
    fs.writeToFile('README.md', data,
    (err) => err ? console.log("Error") : console.log('README.md Successfully Created'));
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'projectTitle'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'emailAddress'
            },
            {
                type: 'input',
                message: questions[3],
                name:'description'
            },
            {
                type: 'input',
                message: questions[4],
                name:'install'
            },
            {
                type: 'input',
                message: questions[5],
                name:'usage'
            },
            {
                type: 'input',
                message: questions[6],
                name:'contribute'
            },
            {
                type: 'input',
                message: questions[7],
                name:'instructions'
            },
            {
                type: 'list',
                message: questions[8],
                name:'license',
                choices: ['MIT', 'MPL 2.0', 'IPL 1.0', 'None']
            },

        ])
    .then((data) => {
        writeToFile(generateMarkdown(data));
    })
}

init();
