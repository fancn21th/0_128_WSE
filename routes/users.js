var express = require("express");
var router = express.Router({
  mergeParams: true
});

router.all("/", function(req, res) {
  res.render("user", { layout: "index" });
});

module.exports = router;
