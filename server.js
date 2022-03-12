const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 3001;
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlpassword",
  database: "simpleboard",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM simpleboard;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send("Success!");
  });
});

app.delete("/api/delete", (req, res) => {
  const idx = req.body.idx;
  const sqlQuery = `DELETE FROM simpleboard WHERE idx = ${idx}`;
  db.query(sqlQuery, [idx], (err, result) => {
    res.send("Delete Success!");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
