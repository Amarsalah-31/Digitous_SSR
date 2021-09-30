const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const hbs = require("express-handlebars");

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set("view engine", "hbs");

app.use(express.json());

app.get("/", (_req, res) => {
  res.render("home", {});
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/signup", (req, res) => {
  res.render("signup", {});
});

app.post("/profile", (req, res) => {
  const user = req.body;
  console.log(user);
  res.render("profile", {
    username: user.username,
  });
});

app.get("/users", (req, res) => {
  res.render("/users");
});

app.get("products", (req, res) => {
  res.render("/products");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});