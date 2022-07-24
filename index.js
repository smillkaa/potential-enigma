// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => { //maybe add a data paramater
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true
                } else {
                    console.log('Please enter your GitHub username!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your email address!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter the project title!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description about your project (Required):',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please provide a short description of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Write the installation instructions (Required):',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('Please provide installation instructions!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write the usage information (Required):',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please provide usage information!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Write the contribution guidelines (Required):',
            validate: contributionInput => {
                if (contributionInput) {
                    return true
                } else {
                    console.log('Please provide contribution guidlines!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write the test instructions (Required):',
            validate: testsInput => {
                if (testsInput) {
                    return true
                } else {
                    console.log('Please provide the test instructions!')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license:',
            choices: ['GPL', 'MIT', 'Apache', 'No license']
        }
    ])
    .then(data => {
        writeToFile(generateMarkdown(data))
    })
} 

// TODO: Create a function to write README file
const writeToFile = function(data) {
    fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                console.log(err)
                return
            }
            console.log("File Created!")
        })
    }

// TODO: Create a function to initialize app
function init() {
   questions()
}
// Function call to initialize app
init();


module.exports = writeToFile
