// Dependencies
var express = require("express");
var router = express.Router();
var parser = require("ua-parser-js");

// Routes
router.get("/", function (req, res) {
  var ip = req.ip;
  var languages = req.headers["accept-language"].match(/[a-zA-z\-]{2,10}/g);
  var ua = parser(req.headers['user-agent']).ua;
  software = ua.substring(ua.indexOf("(")+1, ua.indexOf(")"));
  var response = { "ipaddress": ip, "language": languages[0], "software": software };
  res.json(response);
});

// Return router
module.exports = router;