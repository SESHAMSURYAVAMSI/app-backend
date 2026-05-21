 const Slider = require("../models/SliderModel");


// CREATE SLIDER

const createSlider = async (req, res) => {

    try {

        console.log("BODY :", req.body);

        console.log("FILE :", req.file);

        // CHECK FILE

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image upload failed"

            });

        }

        // CHECK LOCATION

        if (!req.file.location) {

            return res.status(400).json({

                success: false,

                message: "AWS location not found",

                file: req.file

            });

        }

        const data = await Slider.create({

            image: req.file.location,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message: "Slider Created Successfully",

            data

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


const getSliders = async (req, res) => {

    try {

        const data = await Slider.find();

        res.status(200).json({

            success: true,

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createSlider,

    getSliders

};