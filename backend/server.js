const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const db = require("./db/index.ts");

const PORT = 3001;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {});

//get
app.get("/users", (req, res) => {
  db.query(`SELECT * FROM crud`, (err, results, fields) => {
    if (err) console.log(err);

    res.json(results);
  });
});

//create
app.post("/users/create", (req, res) => {
  if (!req.body) return;
  const { name, old } = req.body;
  db.query(
    `INSERT INTO crud (id, name, old) VALUES ("${uuid.v4()}", "${name}", ${old})`
  );
  res.send(`${name} 유저 생성`);
});

//remove
app.post("/users/remove", (req, res) => {
  if (!req.body) return;
  const id = req.body.id;
  db.query(`DELETE FROM crud WHERE id = "${id}"`);

  res.send("유저 삭제");
});

//update
app.put("/users/update", (req, res) => {
  const { id, name, old } = req.body;
  db.query(
    `UPDATE crud SET name = "${name}", old = ${old} WHERE id = "${id}" `
  );
  res.send("user updated.");
});

app.listen(PORT, () => {
  console.log(`server open at ${PORT}PORT.`);
});
