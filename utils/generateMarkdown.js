// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const choice = require("inquirer/lib/objects/choices");

function renderLicenseBadge(license) {
  if (choice.license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (choice.license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (choice.license === "Eclipse 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (choice.license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (choice.license === "Mozilla 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  (license) => { 
    if (choice.license === "APACHE 2.0") {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else if (choice.license === "BSD 3") {
      return `https://opensource.org/licenses/BSD-3-Clause`;
    } else if (choice.license === "Eclipse 1.0") {
      return `https://opensource.org/licenses/EPL-1.0`;
    } else if (choice.license === "MIT") {
      return `https://opensource.org/licenses/MIT`;
    } else if (choice.license === "Mozilla 2.0") {
      return `https://opensource.org/licenses/MPL-2.0`;
    }
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${renderLicenseBadge.license}

  # ${data.title}
  

  ## Description
  ${data.description}
  ***

  <br/><br/>

  ## Table of Contents
  >* [License](#license)
  >* [Installation](#installation)
  >* [Tests](#tests)
  >* [Usage](#usage)
  >* [Contributing](#contributing)
  >* [Questions](#questions)

  <br/><br/>

  ## License
  ${data.license}
  ***

  <br/><br/>
  
  ## Installation
  ${data.installation}
  ***

  <br/><br/>

  ## Tests
  ${data.tests}
  ***

  <br/><br/>

  ## Usage
  ${data.usage}
  ***

  <br/><br/>

  ## Contributing
  ${data.contributing}
  ***

  <br/><br/>

  ## Questions
  For questions, please contact ${data.github} at ${data.email}
  ***

  `;
}

module.exports = generateMarkdown;




// license badge 

// title
// description 

// table of contents 
//   installation 
//   usage 
//   license
//   contributing
//   tests 
//   questions (github username, email)

