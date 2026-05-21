const AddQuiz = require("../models/AddQuizModel");


// CREATE
const createAddQuiz = async (req, res) => {

  try {

    const data = await AddQuiz.create({
      question: req.body.question,
      options: req.body.options,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Quiz Added Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// GET ALL
const getAddQuizs = async (req, res) => {

  try {

    const data = await AddQuiz.find();

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// GET SINGLE
const getSingleAddQuiz = async (req, res) => {

  try {

    const data = await AddQuiz.findById(req.params.id);

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });

    }

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// UPDATE
const updateAddQuiz = async (req, res) => {

  try {

    const data = await AddQuiz.findByIdAndUpdate(
      req.params.id,
      {
        question: req.body.question,
        options: req.body.options,
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Quiz Updated Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// DELETE
const deleteAddQuiz = async (req, res) => {

  try {

    await AddQuiz.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Quiz Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createAddQuiz,
  getAddQuizs,
  getSingleAddQuiz,
  updateAddQuiz,
  deleteAddQuiz,
};