 const AddLink = require("../models/AddLinkModel");
const createAddLink = async (req, res) => {

  try {

    const data = await AddLink.create({
      title: req.body.title,
      link: req.body.link,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Link Added Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const getAddLinks = async (req, res) => {

  try {

    const data = await AddLink.find();

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


const getSingleAddLink = async (req, res) => {

  try {

    const data = await AddLink.findById(req.params.id);

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Link Not Found",
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

const updateAddLink = async (req, res) => {

  try {

    const data = await AddLink.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        link: req.body.link,
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Link Updated Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


const deleteAddLink = async (req, res) => {

  try {

    await AddLink.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Link Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createAddLink,
  getAddLinks,
  getSingleAddLink,
  updateAddLink,
  deleteAddLink,
};