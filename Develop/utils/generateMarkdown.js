function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === "MPL 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === "IPL 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[link](https://opensource.org/licenses/MIT)`;
    } else if (license === "MPL 2.0") {
    return `[link](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === "IPL 1.0") {
    return `[link](https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === "MIT") {
    return `MIT License (Expat)
    A short, permissive software license. 
    Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  
    There are many variations of this license in use.`;
  } else if (license === "MPL 2.0") {
    return `Mozilla Public License 2.0
    MPL is a copyleft license that is easy to comply with. 
  You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. 
  Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. 
  You can distribute binaries under a proprietary license, as long as you make the source available under MPL.`;
  } else if (license === "IPL 1.0") {
    return `IBM Public License 1.0 (IPL)
  The IPL is the open-source license IBM uses for some of its software. 
  Supposed to facilitate commercial use of said software; is very clear on the specifics of liability. 
  Also grants explicit patent rights.`;
} else {
  return ``;
}
}

function generateMarkdown(data) {
  return`
    ${renderLicenseBadge(data.license)}\n
    # ${data.projectTitle}\n
    ## Description of the Project
    ${data.description}\n
    ## Installation Instructions\n
    ${data.installationInstructions}\n
    ## Usage Information\n
    ${data.usage}\n
    ## License\n
    ${renderLicenseLink(data.license)}\n
    ${renderLicenseSection(data.license)}\n
    ### Contribution Guide\n
    ${data.contribute}\n
    ## Contactn\n
    ${data.emailAddress}\n
    [${data.username}](https://github.com/${data.username})\n
  `
}

module.exports = generateMarkdown;
