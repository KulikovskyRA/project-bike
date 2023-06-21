const express = require("express");
const render = require("../render");
const NewWay = require("../views/NewWay");
const router = express.Router();

router.get('/', (req, res) => {
  const user = req.session?.user;
  render(NewWay, { user }, res);
});

module.exports = router;
