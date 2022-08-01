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
    const email = req.body.email;
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
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Wrong username/password combination" });
            }
        });
});

app.get("/cards", (req, res) => {
    db.query(
        "SELECT * FROM adboards where rent_id is NULL;",
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.get("/youradspace/posted", (req, res) => {
    console.log(req.body)
    const ownerId = parseInt(req.body.id);
    db.query(
        "SELECT * FROM adboards WHERE owner_id = ?",
        [ownerId],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                console.log(result);
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.get("/youradspace/posted/:id", (req, res) => {
    const ownerId = parseInt(req.params.id);
    db.query(
        "SELECT * FROM adboards WHERE owner_id = ?",
        [ownerId],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                console.log(result);
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.get("/youradspace/rented", (req, res) => {
    const rentId = req.body.id;
    db.query(
        "SELECT * FROM adboards WHERE rent_id = ?",
        [rentId],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.get("/youradspace/rented/:id", (req, res) => {
    const rentId = req.params.id;
    db.query(
        "SELECT * FROM adboards WHERE rent_id = ?",
        [rentId],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.post("/rent", (req, res) => {
    const rentId = parseInt(req.body.id);
    const title = req.body.title;
    db.query(
        "UPDATE adboards SET rent_id = (?) WHERE title = ?",
        [rentId, title],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.post("/delete", (req, res) => {
    const title = req.body.title;
    db.query(
        "DELETE FROM adboards WHERE title = ?",
        [title],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.post("/unrent", (req, res) => {
    const title = req.body.title;
    db.query(
        "UPDATE adboards SET rent_id = NULL WHERE title = ?",
        [title],
        (err, result) => {
            if (err) {
                console.log({ err: err });
            }
            if (result) {
                res.send(result);
            }
            else {
                res.send({ message: "Error" });
            }
        });
});

app.post("/adspace", (req, res) => {
    const title = req.body.title;
    const location = req.body.location;
    const image = req.body.image;
    const type = req.body.type;
    const id = req.body.id;
    const price = req.body.price;
    db.query(
        "INSERT INTO adboards (title, location, owner_id, type, image, price) VALUES (?, ?, ?, ?, ?, ?);",
        [title, location, id, type, image, price],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })

});



app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});