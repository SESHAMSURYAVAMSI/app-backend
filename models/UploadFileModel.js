const mongoose =
require("mongoose");

const UploadFileSchema =
new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    /**
     * Event Relation
     */
    eventId: {
      type:
        mongoose.Schema.Types
          .ObjectId,

      ref: "Event",

      required: true,
    },

    status: {
      type: String,

      enum: [
        "active",
        "inactive",
      ],

      default: "active",
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "UploadFile",
  UploadFileSchema
);