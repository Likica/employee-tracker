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
    console.log('Connected to your employeeTracker database.')
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
            if (answer.action === 'View all employees') {
                viewEmployees();
            } else if (answer.action === 'View all roles') {
                viewRoles();
            } else if (answer.action === 'View all departments') {
                viewDepartments();
                //might be able to add an employee, need to figure out how to get ids 
            } else if (answer.action === 'Add an employee') {
                addEmployee();
                //might be able to add a role, need to figure out how to get ids 
            } else if (answer.action === 'Add a role') {
                addRole();
                //might be able to add a dept, need to figure out how to get ids
            } else if (answer.action === 'Add department') {
                addDepartment();
                //might be able to update a role....
            } else if (answer.action === 'Update employee role') {
                updateRole();
            }
            //if user does not want to do anything, can just exit
            else if (answer.action === 'Exit') {
                db.end();
            }
        })
}

// write functions for viewing
//view employees
function viewEmployees() {
    var query = "SELECT * FROM employees";
    db.query(query, function (err, res) {
        console.log(`EMPLOYEES:`)
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
        })
        start();
    });
};
//view roles
function viewRoles() {
    var query = "SELECT * FROM roles";
    db.query(query, function (err, res) {
        console.log(`ROLES:`)
        res.forEach(role => {
            console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
        })
        start();
    });
};
//view departments
function viewDepartments() {
    var query = "SELECT * FROM department";
    db.query(query, function (err, res) {
        console.log(`DEPARTMENTS:`)
        res.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`)
        })
        start();
    });
};
// need to add functions to add and update employee/role/dept

