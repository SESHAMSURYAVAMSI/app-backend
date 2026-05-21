const mongoose = require("mongoose");

const AddExhibitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    stall: {
      type: String,
      required: true,
    },

    hall: {
      type: String,
      required: true,
    },

    exhibitorType: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    description: {
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
  "AddExhibitor",
  AddExhibitorSchema
);