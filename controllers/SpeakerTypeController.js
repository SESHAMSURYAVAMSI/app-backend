 const SpeakerType = require("../models/SpeakerTypeModel");


// CREATE
const createSpeakerType = async (req, res) => {

  try {

    const data = await SpeakerType.create({
      speakerType: req.body.speakerType,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Speaker Type Created Successfully",
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
const getSpeakerTypes = async (req, res) => {

  try {

    const data = await SpeakerType.find();

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
const getSingleSpeakerType = async (req, res) => {

  try {

    const data = await SpeakerType.findById(req.params.id);

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Speaker Type Not Found",
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
const updateSpeakerType = async (req, res) => {

  try {

    const data = await SpeakerType.findByIdAndUpdate(
      req.params.id,
      {
        speakerType: req.body.speakerType,
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Speaker Type Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Speaker Type Updated Successfully",
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
const deleteSpeakerType = async (req, res) => {

  try {

    const data = await SpeakerType.findByIdAndDelete(req.params.id);

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Speaker Type Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Speaker Type Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createSpeakerType,
  getSpeakerTypes,
  getSingleSpeakerType,
  updateSpeakerType,
  deleteSpeakerType,
};