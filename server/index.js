const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const renderViewMiddleware = require("./middlewares/renderView");
const bundleApp = require("./middlewares/bundleApp");

const app = express();

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV == "development") {
  bundleApp();
}

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
app.get("*", renderViewMiddleware);

module.exports = app;
