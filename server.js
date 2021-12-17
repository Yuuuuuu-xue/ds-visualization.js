const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(morgan("dev"));

// static directory
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});



