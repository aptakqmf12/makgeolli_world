const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

const PORT = 3001;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("req : ", req);
  res.send("hellow world");
});

let userList = [
  { id: 1, name: "김태완", old: 31 },
  { id: 2, name: "이도경", old: 30 },
  { id: 3, name: "장재형", old: 30 },
];

app.get("/users", (req, res) => {
  res.json(userList);
  console.log(req.params);
});

app.post("/users/create", (req, res) => {
  if (!req.body) return;

  const id = userList.length + 1;
  const { name, old } = req.body;
  userList.push({ id, name, old });

  res.send("user added.");
});

app.post("/users/remove", (req, res) => {
  if (!req.body) return;
  const id = req.body.id;

  userList = userList.filter((user) => user.id !== id);

  res.send("user added.");
});

app.put("/users/update", (req, res) => {
  const { id, name, old } = req.body;

  userList.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.old = old;
    }
    return user;
  });
  res.send("user updated.");
});

app.listen(PORT, () => {
  console.log(`server open at ${PORT}PORT.`);
});
