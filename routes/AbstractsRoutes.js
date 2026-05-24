const express = require("express");

const router = express.Router();

const Abstracts =
require("../models/AbstractsModel");

/**
 * CREATE
 */
router.post(
  "/:eventId/abstracts",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const payload = {
        ...req.body,

        eventId,
      };

      const data =
        await Abstracts.create(
          payload
        );

      res.status(201).json({
        success: true,

        message:
          "Abstract Created Successfully",

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
  "/:eventId/abstracts",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await Abstracts.find({
          eventId,
        });

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
 * GET SINGLE
 */
router.get(
  "/:eventId/abstracts/:id",

  async (req, res) => {
    try {
      const data =
        await Abstracts.findById(
          req.params.id
        );

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
  "/:eventId/abstracts/:id",

  async (req, res) => {
    try {
      const data =
        await Abstracts.findByIdAndUpdate(
          req.params.id,

          req.body,

          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,

        message:
          "Abstract Updated Successfully",

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
  "/:eventId/abstracts/:id",

  async (req, res) => {
    try {
      await Abstracts.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,

        message:
          "Abstract Deleted Successfully",
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