const CommitteeType = require("../models/CommitteeTypeModel");


// CREATE
const createCommitteeType = async (req, res) => {

  try {

    const data = await CommitteeType.create({
      committeeType: req.body.committeeType,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Committee Type Created Successfully",
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
const getCommitteeTypes = async (req, res) => {

  try {

    const data = await CommitteeType.find();

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


// GET SINGLE
const getSingleCommitteeType = async (req, res) => {

  try {

    const data = await CommitteeType.findById(req.params.id);

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
const updateCommitteeType = async (req, res) => {

  try {

    const data = await CommitteeType.findByIdAndUpdate(
      req.params.id,
      {
        committeeType: req.body.committeeType,
        status: req.body.status,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Committee Type Updated Successfully",
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
const deleteCommitteeType = async (req, res) => {

  try {

    await CommitteeType.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Committee Type Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createCommitteeType,
  getCommitteeTypes,
  getSingleCommitteeType,
  updateCommitteeType,
  deleteCommitteeType,
};