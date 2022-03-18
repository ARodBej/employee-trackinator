const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Not Found response for unmatched routes
app.use((req, res) => {
    res.status(404).end();
  });
  
  // Start server after DB connection
  db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
  