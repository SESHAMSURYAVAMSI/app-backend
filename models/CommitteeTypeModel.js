const mongoose = require("mongoose");

const CommitteeTypeSchema = new mongoose.Schema(
  {
    committeeType: {
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
  "CommitteeType",
  CommitteeTypeSchema
);