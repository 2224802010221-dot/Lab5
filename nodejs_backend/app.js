const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const app = express();

app.use(cors());  // ← THÊM DÒNG NÀY
app.use(bodyParser.json());

app.use("/", UserRoute);
app.use("/", ToDoRoute);

module.exports = app;