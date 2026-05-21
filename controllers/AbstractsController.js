const Abstracts = require("../models/AbstractsModel");



const createAbstract = async (req, res) => {

  try {

    const data = await Abstracts.create({
      authorName: req.body.authorName,
      abstractTitle: req.body.abstractTitle,
      track: req.body.track,
      abstractNumber: req.body.abstractNumber,
      abstractDetails: req.body.abstractDetails,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Abstract Created Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



const getAbstracts = async (req, res) => {

  try {

    const data = await Abstracts.find();

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

const getSingleAbstract = async (req, res) => {

  try {

    const data = await Abstracts.findById(req.params.id);

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



const updateAbstract = async (req, res) => {

  try {

    const data = await Abstracts.findByIdAndUpdate(
      req.params.id,
      {
        authorName: req.body.authorName,
        abstractTitle: req.body.abstractTitle,
        track: req.body.track,
        abstractNumber: req.body.abstractNumber,
        abstractDetails: req.body.abstractDetails,
        status: req.body.status,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Abstract Updated Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



const deleteAbstract = async (req, res) => {

  try {

    await Abstracts.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Abstract Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createAbstract,
  getAbstracts,
  getSingleAbstract,
  updateAbstract,
  deleteAbstract,
};