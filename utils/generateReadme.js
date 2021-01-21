const generateLicense = require("./generateLicense.js");
const generateBadge = require("./generateBadge");
const generateReadme = (answers) => {
  return `
# ${answers.pName}

${generateBadge(answers)}

## Description
${answers.pDescription}

## Table of contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributers](#Contributers)
- [Tests](#Tests)
- [License](#License)

## Installation
${answers.pInstallation}

## Usage
${answers.pUsage}

## Contributers
${answers.pContributers}

## Tests
${answers.pTests}

## License
${generateLicense(answers)}

`;
};
module.exports = generateReadme;
