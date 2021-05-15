const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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