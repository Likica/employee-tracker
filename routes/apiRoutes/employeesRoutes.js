// const express = require('express');
// const router = express.Router();
// const db = require('../../db/connection');
// const inputCheck = require('../../utils/inputCheck');

// NEED to add employeesRoutes here (post, delete, add)

//THIS IS FOR ENABLING ADDING EMPLOYEE ENTRIES BY USERS 
// NEED to pay attention to where HTML user input goes...?
// router.post('/employee', ({ body }, res) => {
//     //Data validation
//     const errors = inputCheck(body, 'first_name', 'last_name', 'role_id');
//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `INSERT INTO employees (first_name, last_name, role_id)
//     VALUES (?,?,?)`;
//     const params = [body.first_name, body.last_name, body.role_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });