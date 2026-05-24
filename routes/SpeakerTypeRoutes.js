const express = require("express");

const router = express.Router();

const SpeakerType =
require("../models/SpeakerTypeModel");

/**
 * CREATE
 */
router.post(
  "/:eventId/speaker-types",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await SpeakerType.create({
          speakerType:
            req.body
              .speakerType,

          status:
            req.body.status,

          eventId,
        });

      res.status(201).json({
        success: true,

        message:
          "Speaker Type Created Successfully",

        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

/**
 * GET ALL
 */
router.get(
  "/:eventId/speaker-types",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await SpeakerType.find({
          eventId,
        });

      res.status(200).json({
        success: true,

        count:
          data.length,

        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

/**
 * GET SINGLE
 */
router.get(
  "/:eventId/speaker-types/:id",

  async (req, res) => {
    try {
      const data =
        await SpeakerType.findById(
          req.params.id
        );

      if (!data) {
        return res.status(404).json({
          success: false,

          message:
            "Speaker Type Not Found",
        });
      }

      res.status(200).json({
        success: true,

        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/speaker-types/:id",

  async (req, res) => {
    try {
      const data =
        await SpeakerType.findByIdAndUpdate(
          req.params.id,

          {
            speakerType:
              req.body
                .speakerType,

            status:
              req.body.status,
          },

          {
            new: true,

            runValidators: true,
          }
        );

      if (!data) {
        return res.status(404).json({
          success: false,

          message:
            "Speaker Type Not Found",
        });
      }

      res.status(200).json({
        success: true,

        message:
          "Speaker Type Updated Successfully",

        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/speaker-types/:id",

  async (req, res) => {
    try {
      const data =
        await SpeakerType.findByIdAndDelete(
          req.params.id
        );

      if (!data) {
        return res.status(404).json({
          success: false,

          message:
            "Speaker Type Not Found",
        });
      }

      res.status(200).json({
        success: true,

        message:
          "Speaker Type Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

module.exports = router;