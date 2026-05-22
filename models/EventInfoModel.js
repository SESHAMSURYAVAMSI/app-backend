const mongoose = require("mongoose");

const EventInfoSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,

        required: true,
      },

      description: {
        type: String,

        required: true,
      },

      image: {
        type: String,

        default: "",
      },

      status: {
        type: String,

        enum: [
          "Active",
          "Inactive",
        ],

        default: "Active",
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
    "EventInfo",
    EventInfoSchema
  );