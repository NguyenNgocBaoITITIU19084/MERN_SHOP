const mongoose = require("mongoose");

class MongoDB {
  static connection = () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log(`Success Connection to DB ${process.env.MONGO_URI}`))
      .catch("Failed to Connection to DB");
  };
}

module.exports = MongoDB;
