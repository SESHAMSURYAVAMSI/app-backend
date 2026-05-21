const mongoose = require("mongoose");

const SpeakerTypeSchema = new mongoose.Schema(
  {
    speakerType: {
      type: String,
      required: true,
      trim: true,
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

module.exports = mongoose.model(
  "SpeakerType",
  SpeakerTypeSchema
);