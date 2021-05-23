const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');

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

//query to return all the data from tables for employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//NOTES: With app.get above we just created an API endpoint to retrieve all the employees from the employee table. Now the front-end team can loop and parse this object on the front end to display a list of the employee' names. Most likely, each item in the list will link to a employee's page to display details about that employee.

//GET a single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ erro: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// DELETE an employee
app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});
// NOTES: In this case, we must use the HTTP request method delete(). The endpoint used here also includes a route parameter to uniquely identify the employee to remove. Again, we're using a prepared SQL statement with a placeholder. We'll assign the req.params.id to params, as we did in the last route. The JSON object route response will be the message "deleted", with the changes property set to result.affectedRows. Again, this will verify whether any rows were changed. What if the user tries to delete an employee that doesn't exist? That's where the else if statement comes in. If there are no affectedRows as a result of the delete query, that means that there was no employee by that id. Therefore, we should return an appropriate message to the client, such as "Employee not found".


//CREATE an employee 
app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id)
    VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// NEXT IS TO ADD API ROUTES FOR DEPARTMENT (ALL and single id dept, DELETE route) AND 
//ROLES (ALL and single id, DELETE route)
// // --- FROM HOMEWORK: PUT route for changing the party choice of candidate(s)
// // Update candidate's party
app.put('/api/candidate/:id', (req, res) => {
    const sql = `UPDATE candidates SET party_id = ?
    WHERE id = ?`;
    const params = [req.body.party_id, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            //check if a record was found
        } else if (!result.affectedRows) {
            res.json({
                message: 'Candidate not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

// // parties routes
app.get('/api/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// //api that includes id parameter for single party
app.get('/api/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// // delete route
app.delete('/api/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: res.message });
            //checks if anything was deleted
        } else if (!result.affectedRows) {
            res.json({
                message: 'Party not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
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