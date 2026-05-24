const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const UploadFile =
require("../models/UploadFileModel");

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
  "/:eventId/downloads",

  upload.single("file"),

  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "File is required",
        });
      }

      const data =
        await UploadFile.create({
          title:
            req.body.title,

          fileUrl:
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
          "File Uploaded Successfully",

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
  "/:eventId/downloads",

  async (req, res) => {
    try {
      const data =
        await UploadFile.find({
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
  "/:eventId/downloads/:id",

  upload.single("file"),

  async (req, res) => {
    try {
      const updateData = {
        title:
          req.body.title,

        status:
          req.body.status,
      };

      if (
        req.file?.location
      ) {
        updateData.fileUrl =
          req.file.location;
      }

      const data =
        await UploadFile.findByIdAndUpdate(
          req.params.id,

          updateData,

          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,

        message:
          "File Updated Successfully",

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
  "/:eventId/downloads/:id",

  async (req, res) => {
    try {
      await UploadFile.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,

        message:
          "File Deleted Successfully",
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