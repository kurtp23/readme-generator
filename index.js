// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "pName",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "pDescription",
    message: "What is the purpose of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["MIT License", "Apache License 2.0", "ISC License", "GNU AGPLv3", "The Unlicense"],
  },
  {
    type: "input",
    name: "Year",
    message: "What is the Year?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your full name?",
  },
];

function writeToFile(fileName, data, answers) {
  fs.writeFile(
    `${fileName}_README.md`,
    `
  ## ${answers.pName}

  ## Description
  ${answers.pDescription}
  ## table of contents 
  -[Description](#Description)
  -[License](#License)
  
  ## License
  `,
    (err) => (err ? console.error(err) : console.log("Saved!"))
  );
}
function appendToFile(answers) {
  if (answers.license === "MIT License")
    fs.appendFile(
      `README.md`,
      `MIT License

    Copyright (c) [${JSON.stringify(answers.year)}] [${answers.name}]
  
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
  
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
  
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  if (answers.license === "Apache License 2.0")
    fs.appendFile(
      `${answers.pName}.md`,
      `Copyright [${answers.year}] [${answers.name}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
 
   Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  if (answers.license === "ISC License")
    fs.appendFile(
      `${answers.pName}.md`,
      `ISC License

    Copyright (c) [${answers.year}], [${answers.name}]
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  if (answers.license === "GNU AGPLv3")
    fs.appendFile(
      `${answers.pName}.md`,
      `Copyright (C) <${answers.year}>  <${answers.name}>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  if (answers.license === "The Unlicense")
    fs.appendFile(
      `${answers.pName}.md`,
      `This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <https://unlicense.org>\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
}
// TODO: Create a function to initialize app
function init(answers) {
  writeToFile(answers.pName, answers.pName, answers);
  appendToFile(answers);
}

// Function call to initialize app

inquirer.prompt(questions).then(init);

//interpelate markdown file
// ## table of contents -[description](#description)
//switch operator for licenses??
// inquirer.prompt into init
// const answers = inquirer.promt(questions)
// console.log(answers are, answers)
