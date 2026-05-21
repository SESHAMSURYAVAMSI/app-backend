exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Get Credentials From .env

        const adminEmail = process.env.ADMIN_EMAIL;

        const adminPassword = process.env.ADMIN_PASSWORD;

        // Check Login

        if (
            email === adminEmail &&
            password === adminPassword
        ) {

            return res.status(200).json({

                success: true,

                message: "Login Successful"

            });

        }

        // Invalid Login

        return res.status(401).json({

            success: false,

            message: "Invalid Credentials"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};