 const mongoose = require("mongoose");

const AddExhibitorTypeSchema = new mongoose.Schema(
  {
    exhibitorType: {
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
  "AddExhibitorType",
  AddExhibitorTypeSchema
);