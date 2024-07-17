const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");

const register = async (req, res, next) => {

    // POST DATA
    const name = "Ali Aliz";
    const email = "aali@gmail.com";
    const password = "123456";

    // try catch
    try {
        // async await
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        return next(err);
    }

};

const errorTest = async (req, res, next) => {
    // COde1
    // throw new Error("Bir Hata oluştu");
    return next(new CustomError("Bir Custom Hata oluştu", 400));
    // Code2
};

module.exports = { register, errorTest };