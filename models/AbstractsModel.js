const mongoose =
require("mongoose");

const AbstractsSchema =
new mongoose.Schema(
  {
    authorName: {
      type: String,

      required: true,
    },

    abstractTitle: {
      type: String,

      required: true,
    },

    track: {
      type: String,

      required: true,
    },

    abstractNumber: {
      type: String,

      required: true,
    },

    abstractDetails: {
      type: String,

      required: true,
    },

    status: {
      type: String,

      enum: [
        "active",
        "inactive",
        "approved",
        "rejected",
      ],

      default: "active",
    },

    /**
     * Linked Event
     */
    eventId: {
      type:
        mongoose.Schema.Types
          .ObjectId,

      ref: "Event",

      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "Abstracts",
  AbstractsSchema
);