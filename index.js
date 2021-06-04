const mysql = require('mysql2');
const inquirer = require('inquirer');
// const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const utils = require('./utils');
const consoleTable = require('console.table');

// add function that will start server on port 3001
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employeeTracker'
});