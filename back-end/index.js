require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const MongoDB = require("./db/MongoDB");
const ErrorHandler = require("./utils/ErrorHandler");

const PORT = process.env.PORT;

const app = express();
MongoDB.connection();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));

app.use(ErrorHandler);

app.listen(PORT || 5000, (req, res) => {
  console.log(`Server is runnning on http://localhost:${PORT}`);
});
