
// Function to return the license badge based on the user input
function renderLicenseBadge(license) {
  if (license === "APACHE 2.0") {
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/>`;
  } else if (license === "BSD 3") {
    return `<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"/>`;
  } else if (license === "Eclipse 1.0") {
    return `<img src="https://img.shields.io/badge/License-EPL%201.0-red.svg"/>`;
  } else if (license === "MIT") {
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>`;
  } else if (license === "Mozilla 2.0") {
    return `<img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"/>`;
  } 
}

// Function to return the license link based on the user input
  function renderLicenseLink(license) { 
    if (license === "APACHE 2.0") {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else if (license === "BSD 3") {
      return `https://opensource.org/licenses/BSD-3-Clause`;
    } else if (license === "Eclipse 1.0") {
      return `https://opensource.org/licenses/EPL-1.0`;
    } else if (license === "MIT") {
      return `https://opensource.org/licenses/MIT`;
    } else if (license === "Mozilla 2.0") {
      return `https://opensource.org/licenses/MPL-2.0`;
    }
  }

  
// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  <h1 align="center">${data.title}</h1>
  
  <p align="center">${renderLicenseBadge(data.license)}</p>
  
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
  Copyright © ${data.name} 2021  
  This application is covered under the ${data.license} license.  
  For more information, visit ${renderLicenseLink(data.license)}.
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
  For questions, please contact ${data.name} at  
  https://github.com/${data.github}  
  ${data.email}
  ***
  
  `;
}

module.exports = generateMarkdown;


