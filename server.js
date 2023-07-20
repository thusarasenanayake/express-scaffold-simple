const { default: axios } = require("axios");
var express = require("express");
var logger = require("morgan");

// ----- config -----
const PORT = process.env.PORT || 5000;

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async function (req, res, next) {
  try {
    const resp = await axios.get("https://reqres.in/api/users/1");
    res.json(resp.data);
  } catch (error) {
    next(error);
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(err);
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});
