const express = require("express");

const router = express.Router();

const {
  createAddQuiz,
  getAddQuizs,
  getSingleAddQuiz,
  updateAddQuiz,
  deleteAddQuiz,
} = require("../controllers/AddQuizController");



router.post("/", createAddQuiz);



router.get("/", getAddQuizs);



router.get("/:id", getSingleAddQuiz);



router.put("/:id", updateAddQuiz);



router.delete("/:id", deleteAddQuiz);


module.exports = router;