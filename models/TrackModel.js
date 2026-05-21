const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
  {
    trackName: {
      type: String,
      required: true,
    },

    trackColor: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Track", TrackSchema);