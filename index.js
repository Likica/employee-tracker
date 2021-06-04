const mysql = require('mysql2');
const inquirer = require('inquirer');
// const inputCheck = require('./utils/inputCheck');
const consoleTable = require('console.table');

//Connect to dabatabase
const db = mysql.createConnection(
    {
        multipleStatements: true,
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL passwrod
        password: 'BootSQL#2021',
        database: 'employeeTracker'
    },
    console.log('Connected to the employeeTracker database.')
);

db.connect(function (err) {
    if (err) throw err;
    start();
});
// need to add choices and questions
function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Please choose what you would like to do?",
            choices: [
                "View all employees",
                "View all roles",
                "View all departments",
                "Add an employee",
                "Add a role",
                "Add a department",
                "Update an employee",
                "Update an employee role",
                "Update department",
                "Exit"
            ]
        })
        .then(function (answer) {
            if (answer.action === 'View all departments') {
                viewDepartments();
            } else if (answer.action === 'View all roles') {
                viewRoles();
            } else if (answer.action === 'View all employees') {
                viewEmployees();
            } else if (answer.action === 'Add a department') {
                addDepartment();
            } else if (answer.action === 'Add a role') {
                addRole();
            } else if (answer.action === 'Add an employee') {
                addEmployee();
            } else if (answer.action === 'Update employee role') {
                updateRole();
            }
            else if (answer.action === 'Exit') {
                db.end();
            }
        })
}