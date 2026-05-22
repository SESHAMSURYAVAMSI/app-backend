const Track =
require("../models/TrackModel");



// CREATE
const createTrack =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await Track.create({

      eventId,

      trackName:
        req.body.trackName,

      trackColor:
        req.body.trackColor,

      sessionDateId:
        req.body.sessionDateId,

      status:
        req.body.status,

    });

    res.status(201).json({

      success: true,

      message:
        "Track Created Successfully",

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
const getTracks =
async (req, res) => {

  try {

    const { eventId } =
    req.params;

    const data =
    await Track.find({

      eventId

    })

    .populate(
      "sessionDateId",
      "sessionDate"
    )

    .sort({
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
const getSingleTrack =
async (req, res) => {

  try {

    const data =
    await Track.findById(
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
const updateTrack =
async (req, res) => {

  try {

    const data =
    await Track.findByIdAndUpdate(

      req.params.id,

      {

        trackName:
          req.body.trackName,

        trackColor:
          req.body.trackColor,

        sessionDateId:
          req.body.sessionDateId,

        status:
          req.body.status,

      },

      { new: true }

    );

    res.status(200).json({

      success: true,

      message:
        "Track Updated Successfully",

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
const deleteTrack =
async (req, res) => {

  try {

    await Track.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({

      success: true,

      message:
        "Track Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};



module.exports = {

  createTrack,

  getTracks,

  getSingleTrack,

  updateTrack,

  deleteTrack,

};