 const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const {

    createCommitteeMember,

    getCommitteeMembers,

    getSingleCommitteeMember,

    updateCommitteeMember,

    deleteCommitteeMember

} = require(
    "../controllers/CommitteeMembersController"
);




const s3 = new S3Client({

    region: process.env.AWS_REGION,

    credentials: {

        accessKeyId:
            process.env.AWS_ACCESS_KEY_ID,

        secretAccessKey:
            process.env.AWS_SECRET_ACCESS_KEY

    }

});




const upload = multer({

    storage: multerS3({

        s3: s3,

        bucket:
            process.env.AWS_BUCKET_NAME,

        contentType:
            multerS3.AUTO_CONTENT_TYPE,

        key: function (req, file, cb) {

            cb(
                null,
                Date.now() +
                "-" +
                file.originalname
            );

        }

    })

});




router.post(

    "/",

    upload.single("image"),

    createCommitteeMember

);


router.get("/", getCommitteeMembers);




router.get("/:id", getSingleCommitteeMember);


router.put(

    "/:id",

    upload.single("image"),

    updateCommitteeMember

);



router.delete(
    "/:id",
    deleteCommitteeMember
);


module.exports = router;