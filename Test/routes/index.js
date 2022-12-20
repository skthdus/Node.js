const express = require("express");
const Book = require("../models/books");

const router = express.Router();

router.post("/book/insert", async (req, res, next) => {
  let { title, author, company, isbn, count } = req.body;
  try {
    //데이터 삽입 시 사용하는 함수
    //user -> 삽입된 데이터 반환
    const book = await Book.create({
      title: title,
      author: author,
      company: company,
      isbn: isbn,
      count: count,
    });

    res.json(book); //삽입된 데이터를 그대로 응답
  } catch (err) {
    next(err); //에러처리 미들웨어
  }
});

// user 모든 값 조회 (get)
router.get("/book/selectall", async (req, res, next) => {
  try {
    const book = await Book.findAll();
    res.json(book);
  } catch (err) {
    next(err);
  }
});

router.get("/book/select/:num", async (req, res, next) => {
  try {
    const book = await Book.findOne({
      attributes: ["num", "title", "author", "company", "isbn", "count"],
      where: { num: req.params.num },
    });

    res.json(book);
  } catch (err) {
    next(err);
  }
});

//수정 : patch (data : body)
router.patch("/book/update/:num", async (req, res, next) => {
  try {
    const result = await Book.update(
      {
        //수정할 값
        title: req.body.title,
        author: req.body.author,
        company: req.body.company,
        isbn: req.body.isbn,
        count: req.body.count,
      },
      {
        where: { num: req.params.num },
      }
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/book/delete/:num", async (req, res, next) => {
  try {
    const result = await Book.destroy({
      where: { num: req.params.num },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
