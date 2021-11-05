// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge =  `https://img.shields.io/badge/license-${data.license}-brightgreen`;
  if (questions[6].choices[0].checked) {
    return licenseBadge
  }
  
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <img src="https://img.shields.io/badge/license-${data.license}-brightgreen"
  alt="License Badge"/>

  
  ## Table of Contents:

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)


  ##  Description:
  ${data.description}


  ## Installation:
  ${data.install}


  ## Usage:
  ${data.usage}


  ## Contributing:
  ${data.contribution}


  ## Tests:
  ${data.test}


  ## Questions:
  ${data.questions1}

  ${data.questions2}

  ${data.questions3}

`
};


module.exports = generateMarkdown;
