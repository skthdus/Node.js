const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

//loginform.html 렌더링
router.get("/", (req, res) => {
  res.render("loginform");
});

//로그인 처리
router.post("/login", (req, res) => {
  if (req.body.id === "smhrd" && req.body.pw === "1234") {
    res.render("loginSuccess", { id: req.body.id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
