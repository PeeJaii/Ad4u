const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "ad4u",
  });



app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });