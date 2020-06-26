// function to generate markdown for README
function generateMarkdown(data) {
  // const inputData = {username, email, title, description, license, dependencies, tests, usage, contributing}
  return `## ${data.title}
  ${data.license} link

  ## Description

  ${data.description}

  ## Table of contents

  * [Installation] ($installation)
  * [Usage] ($usage)
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

  ${data.license}

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
