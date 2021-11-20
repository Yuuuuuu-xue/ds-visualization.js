const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(morgan("dev"));

// static directory
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  res.status(200).send("DS.js library");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});



