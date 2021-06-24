# employee-tracker
  ### By Likica * [Email me](mailto:fahrija_wyroski@live.com) * 

  * [Walk-Through Video Link](https://drive.google.com/file/d/1r0kFLJw9-rBXJqjbkkAIW3vfz40-BI1m/view)
 
<p align="center">
    <img src="https://img.shields.io/github/repo-size/likica/employee-tracker" />
    <img src="https://img.shields.io/github/issues/likica/employee-tracker" />
    <img src="https://img.shields.io/github/last-commit/likica/employee-tracker" >
    </a>
</p>
<p align="center">
<img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/Javascript-blue" />
    <img src="https://img.shields.io/badge/consoletable-yellow" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-mysql2-darkred" />
</p>

  ## Table of contents
  * [Description](#Description)
  * [Installation Instructions](#installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [Questions](#Questions)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
 
  # Description
  ##### [Back to Table of Contents](#Table-of-Contents)
  A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

  ## User Story
  ##### [Back to Table of Contents](#Table-of-Contents)
  I WANT to be able to view and manage the departments, roles, and employees in my company - SO THAT I can organize and plan my business

  ## Installation Instructions
  ##### [Back to Table of Contents](#Table-of-Contents)
  1. Install node (`npm init` and `npm install --y`), install dependencies needed (inquirer, mysql2,jest), then run the MySQL Shell commands to create DB, SEED it and run `npm start` or `node index` in your Terminal/Bash

  ## Usage Instructions
  ##### [Back to Table of Contents](#Table-of-Contents)
  - Once you have installed `npm dependencies` start the app by running `npm start` or `node index` (either one will work)
  - Once started, app will prompt you with choices list (view all employees, departments or roles, as well as choices to add new employee, department or role and update the role of an employee)

  <p align="center" width="100%">
    <img src="assets/images/NAVChoices.png" width="70%"/>
  </p>
  - View All Employees:
  <p align="center" width="100%">
    <img src="assets/images/ViewEmployees.png" width="70%"/>
  </p>
- View All Roles:
  <p align="center" width="100%">
    <img src="assets/images/ViewRoles.png" width="70%"/>
  </p>
- View All Departments:
  <p align="center" width="100%">
    <img src="assets/images/ViewDepartments.png" width="70%"/>
  </p>
- Add an Employee:

* Step 1- enter first and last name of the new employee
  <p align="center" width="100%">
    <img src="assets/images/AddEmployee.png" width="70%"/>
  </p>
* Step 2- choose the role and manager for this employee
    <p align="center" width="100%">
    <img src="assets/images/AddEmployee-1.png" width="70%"/>
  </p>
* New Employee Added (employee with ID#12):
    <p align="center" width="100%">
    <img src="assets/images/AddEmployee2.png" width="70%"/>
  </p>
- Add a Role - Once you chose this option, app will prompt for a New Role name, salary and department this role belongs to. Once you give all required info, your new role will be added to the list of roles:
    <p align="center" width="100%">
    <img src="assets/images/AddRole.png" width="70%"/>
  </p>
- Add a Department - Once you chose this option, app will prompt for a New Department name. Once you give all required info, your new department will be added to the list of departments:
    <p align="center" width="100%">
    <img src="assets/images/AddDepartment.png" width="70%"/>
  </p>
- Update an Employee Role - Once you chose this option, app will prompt you to choose the last name of the employee changing role and give you list of role options to choose from. Once you give all required info, your employee role will be updated:
    <p align="center" width="100%">
    <img src="assets/images/UpdateRole.png" width="70%"/>
  </p>


  ## Contributing
  ##### [Back to Table of Contents](#Table-of-Contents)
  - All are welcome to contribute within limits of below License

  ## Tests
  #### [Back to Table of Contents](#Table-of-Contents)
  1. inputCheck.test
  2. 

  ## Questions
  ##### [Back to Table of Contents](#Table-of-Contents)
  * If you have any questions, please contact me at fahrija_wyroski@live.com

  ## License 
  * License Type: MIT
    ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
    [License: MIT](https://opensource.org/licenses/MIT)
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  _This README was generated by Likica with_ ❤️ [GitHub Profile](https://github.com/likica)
 
  