const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const db = require("./db/index.ts");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const userQuery = require("./queries/user");
const jwt = require("jsonwebtoken")

const sessionStore = new MySQLStore(
  {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "aptakqmf12!",
    database: "crud",
  },
  db
);

const PORT = 3001;
const app = express();

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  db.query(userQuery.getUsers(), (err, results, fields) => {
    if (err) console.log(err);

    res.json(results);
  });
});

app.post("/users/create", (req, res) => {
  if (!req.body) return;
  const { name, old } = req.body;
  db.query(userQuery.createUser(uuid.v4(), name, old));
  res.send(`${name} 유저 생성`);
});

app.post("/users/remove", (req, res) => {
  if (!req.body) return;
  const id = req.body.id;
  db.query(userQuery.removeUser(id));

  res.send("유저 삭제");
});

app.put("/users/update", (req, res) => {
  const { id, name, old } = req.body;
  db.query(userQuery.updateUser(id, name, old));
  res.send("user updated.");
});

app.post("/signin", (req, res) => {
  const { id, pw } = req.body;

  db.query(
    `SELECT name, old FROM crud.user WHERE id = ? AND pw = ?`,
    [id, pw],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internar Server Error!" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      let token = "";
      token = jwt.sign(
        {
          type: "JWT",
          nickname: "nickname",
          profile: "profile",
        },
        "key",
        {
          expiresIn: "15m", // 15분후 만료
          issuer: "토큰발급자",
        }
      );

      return res.json(results);
    }
  );
});

app.listen(PORT, () => {
  console.log(`server open at ${PORT}PORT.`);
});
