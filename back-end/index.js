require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const MongoDB = require("./db/MongoDB");
const ErrorHandler = require("./middleware/error");

// Import Router
const user = require("./controller/user");

const PORT = process.env.PORT;

const app = express();
MongoDB.connection();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/v2/user", user);

app.use(ErrorHandler);

app.listen(PORT || 5000, (req, res) => {
  console.log(`Server is runnning on http://localhost:${PORT}`);
});
