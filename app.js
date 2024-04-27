const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port);
app.use("/", require("./routes/home"));
app.use("/pyserver", require("./server/api"));
app.use("/ncp", require("./server/call-api"));