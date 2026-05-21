 const AddExhibitorType = require("../models/AddExhibitorTypeModel");



const createAddExhibitorType = async (req, res) => {

  try {

    const data = await AddExhibitorType.create({
      exhibitorType: req.body.exhibitorType,
      status: req.body.status,
    });

    res.status(201).json({
      success: true,
      message: "Exhibitor Type Added Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



const getAddExhibitorTypes = async (req, res) => {

  try {

    const data = await AddExhibitorType.find();

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



const getSingleAddExhibitorType = async (req, res) => {

  try {

    const data = await AddExhibitorType.findById(req.params.id);

    if (!data) {

      return res.status(404).json({
        success: false,
        message: "Exhibitor Type Not Found",
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


const updateAddExhibitorType = async (req, res) => {

  try {

    const data = await AddExhibitorType.findByIdAndUpdate(
      req.params.id,
      {
        exhibitorType: req.body.exhibitorType,
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Exhibitor Type Updated Successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



const deleteAddExhibitorType = async (req, res) => {

  try {

    await AddExhibitorType.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Exhibitor Type Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


module.exports = {
  createAddExhibitorType,
  getAddExhibitorTypes,
  getSingleAddExhibitorType,
  updateAddExhibitorType,
  deleteAddExhibitorType,
};