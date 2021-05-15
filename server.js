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