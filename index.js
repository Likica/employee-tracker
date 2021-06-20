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
                "Update an employee role",
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

//add employee
function addEmployee() {
    db.query('SELECT * FROM roles', function (err, result) {
        if (err) throw (err);
        inquirer
            .prompt([{
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?",
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?",
            },
            {
                name: "roleName",
                type: "list",
                message: "What role does the employee have?",
                choices: function () {
                    rolesArray = [];
                    result.forEach(result => {
                        rolesArray.push(
                            result.title
                        );
                    })
                    return rolesArray;
                }
            }
            ])
            .then(function (answer) {
                console.log(answer);
                const role = answer.roleName;
                db.query('SELECT * FROM roles', function (err, res) {
                    if (err) throw (err);
                    let filteredRole = res.filter(function (res) {
                        return res.title == role;
                    })
                    let roleId = filteredRole[0].id;
                    db.query("SELECT * FROM employees", function (err, res) {
                        inquirer
                            .prompt([
                                {
                                    name: "manager",
                                    type: "list",
                                    message: "Please enter name of the manager for the employee.",
                                    choices: function () {
                                        managersArray = []
                                        res.forEach(res => {
                                            managersArray.push(
                                                res.last_name)

                                        })
                                        return managersArray;
                                    }
                                }
                            ]).then(function (managerAnswer) {
                                const manager = managerAnswer.manager;
                                db.query('SELECT * FROM employees', function (err, res) {
                                    if (err) throw (err);
                                    let filteredManager = res.filter(function (res) {
                                        return res.last_name == manager;
                                    })
                                    let managerId = filteredManager[0].id;
                                    console.log(managerAnswer);
                                    let query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
                                    let values = [answer.firstName, answer.lastName, roleId, managerId]
                                    console.log(values);
                                    db.query(query, values,
                                        function (err, res, fields) {
                                            console.log(`New employee added: ${(values[0]).toUpperCase()}.`)
                                        })
                                    viewEmployees();
                                })
                            })
                    })
                })
            })
    })
}
//add dept - doesn't work...
function addDepartment() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        inquirer
            .prompt([{
                name: "department_id",
                type: "input",
                message: "Please enter ID number for this department",
            },
            {
                name: "department",
                type: "input",
                message: "Please enter the name of a new department.",

                choices: function () {
                    var choicesArray = [];
                    res.forEach(res => {
                        choicesArray.push(
                            res.name
                        );
                    })
                    return choicesArray;
                }
            }
            ])
            .then(function (answer) {
                const department = answer.departmentName;
                db.query('SELECT * FROM department', function (err, res) {

                    if (err) throw (err);
                    let filteredDept = res.filter(function (res) {
                        return res.name == department;
                    }
                    )
                    let id = filteredDept[0].id;
                    let query = "INSERT INTO roles (id, name) VALUES (?, ?)";
                    let values = [answer.department_id, answer.department]
                    console.log(values);
                    db.query(query, values,
                        function (err, res, fields) {
                            console.log(`New department added: ${(values[0]).toUpperCase()}.`)
                        })
                    viewDepartments()
                })
            })
    })
}

//add role- doesn't work...
function addRole() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        inquirer
            .prompt([{
                name: "title",
                type: "input",
                message: "Please enter title of a new role.",
            },
            {
                name: "salary",
                type: "input",
                message: "Please enter the salary for this role",
            },
            {
                name: "departmentName",
                type: "list",
                message: "What department this role belongs to?",
                choices: function () {
                    var choicesArray = [];
                    res.forEach(res => {
                        choicesArray.push(
                            res.name
                        );
                    })
                    return choicesArray;
                }
            }
            ])
            .then(function (answer) {
                const department = answer.departmentName;
                db.query('SELECT * FROM DEPARTMENT', function (err, res) {

                    if (err) throw (err);
                    let filteredDept = res.filter(function (res) {
                        return res.name == department;
                    }
                    )
                    let id = filteredDept[0].id;
                    let query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
                    let values = [answer.title, parseInt(answer.salary), id]
                    console.log(values);
                    db.query(query, values,
                        function (err, res, fields) {
                            console.log(`New role added: ${(values[0]).toUpperCase()}.`)
                        })
                    viewRoles()
                })
            })
    })
}
//updateRole - doesn't work...
function updateRole() {
    db.query('SELECT * FROM employees', function (err, result) {
        if (err) throw (err);
        inquirer
            .prompt([
                {
                    name: "employeeName",
                    type: "list",
                    message: "Please enter Fname and Lname of the employee changing the role",
                    choices: function () {
                        employeeArray = [];
                        result.forEach(result => {
                            employeeArray.push(
                                result.last_name
                            );
                        })
                        return employeeArray;
                    }
                }
            ])

            .then(function (answer) {
                console.log(answer);
                const name = answer.employeeName;
                db.query("SELECT * FROM roles", function (err, res) {
                    inquirer
                        .prompt([
                            {
                                name: "role",
                                type: "list",
                                message: "Please enter new role for the selected employee.",
                                choices: function () {
                                    rolesArray = [];
                                    res.forEach(res => {
                                        rolesArray.push(
                                            res.title)

                                    })
                                    return rolesArray;
                                }
                            }
                        ]).then(function (rolesAnswer) {
                            const role = rolesAnswer.role;
                            console.log(rolesAnswer.role);
                            db.query('SELECT * FROM roles WHERE title = ?', [role], function (err, res) {
                                if (err) throw (err);
                                let roleId = res[0].id;
                                let query = "UPDATE employees SET role_id ? WHERE last_name ?";
                                let values = [roleId, name]
                                console.log(values);
                                db.query(query, values,
                                    function (err, res, fields) {
                                        console.log(`${name}'s role has been updated to ${role}.`)
                                    })
                                viewEmployees();
                            })
                        })
                })
            })
    })

}

