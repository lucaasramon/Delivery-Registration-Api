const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);
const dbConfig = 'mongodb+srv://delivery:adminacces@cluster0.5f839.mongodb.net/';
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;