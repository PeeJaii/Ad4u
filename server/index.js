const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "ad4u",
  });

  app.post("/signup", (req, res) => {
    const username = req.body.username;
    const email =req.body.email;
    const password = req.body.password;
    db.query(
      "INSERT INTO accounts (username, emailid, password) VALUES (?, ?, ?);",
      [username, email, password],
      (err, result) => {
        console.log(err);
      });
  });

  app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          console.log({err: err});
        } 
          if(result){
          res.send(result);
          }
          else {
            res.send({message: "Wrong username/password combination"});
          }
      });
  });

  app.get("/cards", (req, res) => {
    db.query(
      "SELECT * FROM adboards",
      (err, result) => {
        if (err) {
          console.log({err: err});
        } 
          if(result){
          res.send(result);
          }
          else {
            res.send({message: "Error"});
          }
      });
  });

  app.get("/youradspace/posted", (req, res) => {
    db.query(
      "SELECT * FROM adboards WHERE owner_id = ?",
      [ ownerId ],
      (err, result) => {
        if (err) {
          console.log({err: err});
        } 
          if(result){
          res.send(result);
          }
          else {
            res.send({message: "Error"});
          }
      });
  });

  app.get("/youradspace/rented", (req, res) => {
    db.query(
      "SELECT * FROM adboards WHERE rent_id = ?",
      [ rentId ],
      (err, result) => {
        if (err) {
          console.log({err: err});
        } 
          if(result){
          res.send(result);
          }
          else {
            res.send({message: "Error"});
          }
      });
  });

  app.post("/adspace", (req, res) => {
    const title = req.body.title;
    const location =req.body.location;
    const image = req.body.image;
    db.query(
      "INSERT INTO adboards (title, location, image) VALUES (?, ?, ?);",
      [title, location, image],
      (err, result) => {
        console.log(err);
      });
  });



app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });