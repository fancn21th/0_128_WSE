var express = require("express");
var router = express.Router({
  mergeParams: true
});

router.get("/", function(req, res) {
  res.render("main", { layout: "index" });
});

module.exports = router