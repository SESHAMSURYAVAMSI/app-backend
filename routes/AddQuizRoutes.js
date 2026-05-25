const express = require("express");

const router = express.Router();

const {
  createAddQuiz,
  getAddQuizs,
  getSingleAddQuiz,
  updateAddQuiz,
  deleteAddQuiz,
} = require("../controllers/AddQuizController");

/**
 * CREATE
 */
router.post(
  "/:eventId/quizzes",
  createAddQuiz
);

/**
 * GET ALL
 */
router.get(
  "/:eventId/quizzes",
  getAddQuizs
);

/**
 * GET SINGLE
 */
router.get(
  "/:eventId/quizzes/:id",
  getSingleAddQuiz
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/quizzes/:id",
  updateAddQuiz
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/quizzes/:id",
  deleteAddQuiz
);

module.exports = router;