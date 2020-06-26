// function to generate markdown for README
function generateMarkdown(data) {
  let license;
  switch (data.license) {
    case 'MIT':
      license = 'MIT license. [https://choosealicense.com/licenses/mit/]';
      break;
    case 'Apache 2.0':
      license = 'Apache 2.0 license. [https://choosealicense.com/licenses/mit/]'
      break;
    default:
      license = 'GNU General Public License v3.0 license. [https://choosealicense.com/licenses/gpl-3.0/]'
      break;
  }
  // const inputData = {username, email, title, description, license, dependencies, tests, usage, contributing}
  return `## ${data.title}
  ${data.license} license

  ## Description

  ${data.description}

  ## Table of contents

  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  '''
  ${data.dependencies}
  '''
  ## Usage
  ${data.usage}

  ## License

  This project is licensed under the ${license}. 

  ## Contributing

  ${data.contributing}

  ## Tests
  To run tests, run the following command:
  
  '''
  ${data.tests}
  '''

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at [${data.username}] (https://github.com/${data.username}/)
  

`;
}

module.exports = generateMarkdown;
