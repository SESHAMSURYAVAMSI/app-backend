const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const AddDelegate =
require("../models/AddDelegateModel");

/**
 * AWS
 */
const s3 = new S3Client({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env
        .AWS_ACCESS_KEY_ID,

    secretAccessKey:
      process.env
        .AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Upload
 */
const upload = multer({
  storage: multerS3({
    s3,

    bucket:
      process.env
        .AWS_BUCKET_NAME,

    contentType:
      multerS3.AUTO_CONTENT_TYPE,

    key: function (
      req,
      file,
      cb
    ) {
      cb(
        null,
        Date.now() +
          "-" +
          file.originalname
      );
    },
  }),
});

/**
 * CREATE
 */
router.post(
  "/:eventId/delegates",

  upload.single("image"),

  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Image is required",
        });
      }

      const existingEmail =
        await AddDelegate.findOne({
          email:
            req.body.email,
        });

      if (existingEmail) {
        return res.status(400).json({
          success: false,
          message:
            "Email already exists",
        });
      }

      const data =
        await AddDelegate.create({
          name:
            req.body.name,

          email:
            req.body.email,

          designation:
            req.body.designation,

          image:
            req.file.location,

          eventId:
            req.params
              .eventId,

          status:
            req.body.status,
        });

      res.status(201).json({
        success: true,
        message:
          "Delegate Created Successfully",
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
  "/:eventId/delegates",

  async (req, res) => {
    try {
      const data =
        await AddDelegate.find({
          eventId:
            req.params
              .eventId,
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
 * UPDATE
 */
router.put(
  "/:eventId/delegates/:id",

  upload.single("image"),

  async (req, res) => {
    try {
      const updateData = {
        name:
          req.body.name,

        email:
          req.body.email,

        designation:
          req.body.designation,

        status:
          req.body.status,
      };

      if (
        req.file?.location
      ) {
        updateData.image =
          req.file.location;
      }

      const data =
        await AddDelegate.findByIdAndUpdate(
          req.params.id,
          updateData,
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        message:
          "Delegate Updated Successfully",
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
  "/:eventId/delegates/:id",

  async (req, res) => {
    try {
      await AddDelegate.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Delegate Deleted Successfully",
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