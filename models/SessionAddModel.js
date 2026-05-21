const mongoose = require("mongoose");

const SessionAddSchema = new mongoose.Schema(
  {
    sessionDate: {
      type: String,
      required: true,
    },

    color: {
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

module.exports = mongoose.model(
  "SessionAdd",
  SessionAddSchema
);