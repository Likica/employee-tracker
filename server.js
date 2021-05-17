const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to dabatabase
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL passwrod
        password: 'BootSQL#2021',
        database: 'employeeTracker'
    },
    console.log('Connected to the employeeTracker database.')
);
//query to return all the data from tables
db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
});
//GET a single employee
// db.query(`SELECT * FROM employee WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE an employee
// db.query(`DELETE FROM employee WHERE id=?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//CREATE an employee -- NOTES: In the SQL command we use the INSERT INTO command for the candidates table to add the values that are assigned to params. The four placeholders must match the four values in params, so we must use an array. Because the candidates table includes four columns—id, first_name, last_name, and industry_connected—we need four placeholders (?) for those four values. The values in the params array must match the order of those placeholders.

// const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
// VALUES (?, ?, ?, ?)`;
// const params = ['Lucky', 'Champ', 3];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// // get test route 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World!'
//     });
// });













//Default response for any other user request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});