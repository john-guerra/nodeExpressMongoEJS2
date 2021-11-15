var express = require("express");
var router = express.Router();


const myDB = require("../db/myMongoDB.js");

/* GET home page. */
router.get("/", async function (req, res) {
  const fires = await myDB.getFires();


  res.render("index", { fires });
});

module.exports = router;
