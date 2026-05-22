const SessionDetails =
require("../models/SessionDetailsModel");



// CREATE
const createSessionDetails =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await SessionDetails.create({

      eventId,

      title:
        req.body.title,

      hall:
        req.body.hall,

      date:
        req.body.date,

      startTime:
        req.body.startTime,

      endTime:
        req.body.endTime,

      description:
        req.body.description,

      sessionDateId:
        req.body.sessionDateId,

      trackId:
        req.body.trackId,

      status:
        req.body.status

    });

    res.status(201).json({

      success: true,

      message:
        "Session Details Added Successfully",

      data

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};




// GET ALL
const getSessionDetails =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await SessionDetails.find({

      eventId

    })

    .populate(
      "sessionDateId",
      "sessionDate"
    )

    .populate(
      "trackId",
      "trackName"
    )

    .sort({
      createdAt: -1
    });

    res.status(200).json({

      success: true,

      count: data.length,

      data

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};




// GET SINGLE
const getSingleSessionDetails =
async (req, res) => {

  try {

    const data =
    await SessionDetails.findById(
      req.params.id
    );

    if (!data) {

      return res.status(404).json({

        success: false,

        message:
          "Session Details Not Found"

      });

    }

    res.status(200).json({

      success: true,

      data

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};




// UPDATE
const updateSessionDetails =
async (req, res) => {

  try {

    const data =
    await SessionDetails.findByIdAndUpdate(

      req.params.id,

      {

        title:
          req.body.title,

        hall:
          req.body.hall,

        date:
          req.body.date,

        startTime:
          req.body.startTime,

        endTime:
          req.body.endTime,

        description:
          req.body.description,

        sessionDateId:
          req.body.sessionDateId,

        trackId:
          req.body.trackId,

        status:
          req.body.status

      },

      {
        new: true,
        runValidators: true
      }

    );

    res.status(200).json({

      success: true,

      message:
        "Session Details Updated Successfully",

      data

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};




// DELETE
const deleteSessionDetails =
async (req, res) => {

  try {

    await SessionDetails.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      success: true,

      message:
        "Session Details Deleted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



module.exports = {

  createSessionDetails,

  getSessionDetails,

  getSingleSessionDetails,

  updateSessionDetails,

  deleteSessionDetails

};