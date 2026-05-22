const SessionAdd =
require("../models/SessionAddModel");



// CREATE
const createSessionAdd =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await SessionAdd.create({

      eventId,

      sessionDate:
        req.body.sessionDate,

      color:
        req.body.color,

      status:
        req.body.status,

    });

    res.status(201).json({

      success: true,

      message:
        "Session Added Successfully",

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
const getSessionAdds =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await SessionAdd.find({

      eventId

    }).sort({

      createdAt: -1

    });

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
const getSingleSessionAdd =
async (req, res) => {

  try {

    const data =
    await SessionAdd.findById(
      req.params.id
    );

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
const updateSessionAdd =
async (req, res) => {

  try {

    const data =
    await SessionAdd.findByIdAndUpdate(

      req.params.id,

      {

        sessionDate:
          req.body.sessionDate,

        color:
          req.body.color,

        status:
          req.body.status,

      },

      { new: true }

    );

    res.status(200).json({

      success: true,

      message:
        "Session Updated Successfully",

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
const deleteSessionAdd =
async (req, res) => {

  try {

    await SessionAdd.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      success: true,

      message:
        "Session Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};



module.exports = {

  createSessionAdd,

  getSessionAdds,

  getSingleSessionAdd,

  updateSessionAdd,

  deleteSessionAdd,

};