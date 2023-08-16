// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "projectTitle",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Descibe your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "How to install?",
	},
	{
		type: "input",
		name: "usage",
		message: "What is the project used for?",
	},
	{
		type: "input",
		name: "contribution",
		message: "How did you contibute to the project?",
	},
	{
		type: "input",
		name: "contributionTwo",
		message: "What is your GitHub username and link it.",
	},
	{
		type: "input",
		name: "contributionThree",
		message: "What is your email address?",
	},
	{
		type: "input",
		name: "tests",
		message: "How to test it?",
	},
	{
		type: "list",
		message: "Which license do you want to use?",
		name: "license",
		choices: [
			"MIT",
			"CC0",
			"GPL",
			"LGPL",
			"Mozilla 2.0",
			"Apache 2.0",
			"Boost",
		],
	},
];

const generatedContent = (projectTitle, description, installation, usage, contribution, contributionTwo, contributionThree, tests, license, badgeLicense) => {
    return `# Title: ${projectTitle}
<img src="${badgeLicense}">
  
## Table of Contents

-[Title](#title)  
-[Description](#description)  
-[Installation](#installation)  
-[Usage](#usage)  
-[Contribution](#contribution)  
-[Questions](#questions)  
-[Tests](#tests)  
-[License](#license)  



# Description 
${description}

# Installation 
${installation}

# Usage 
${usage}

# Contribution
${contribution}

# Questions
If you have any questions please contact me via my ${contributionTwo} or email me at ${contributionThree}.

# Tests
${tests}

# License
${license}` 
};


inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    const badgeLicense = (answers) => {
        if (answers.license === 'MIT') {
            return "https://img.shields.io/badge/License-MIT-yellow.svg";
        } else if (answers.license === 'CC0') {
            return "https://licensebuttons.net/l/zero/1.0/80x15.png"
        } else if (answers.license === 'GPL') {
            return "https://img.shields.io/badge/License-GPL_v2-blue.svg"
        } else if (answers.license === 'LGPL') {
            return "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
        } else if (answers.license === 'Mozilla 2.0') {
            return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
        } else if (answers.license === 'Apache 2.0') {
            return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
        } else {
            return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
        }
    }

    const bLicense = badgeLicense (answers);
    const gContent =
			generatedContent (answers.projectTitle, answers.description, answers.installation, answers.usage, answers.contribution, answers.contributionTwo, answers.contributionThree, answers.tests, answers.license, bLicense);

    console.log (bLicense);
    console.log(gContent);
    
	// TODO: Create a function to write README file
	fs.writeFile("generatedREADME.md", gContent, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("Success!");
		}
	});
});
