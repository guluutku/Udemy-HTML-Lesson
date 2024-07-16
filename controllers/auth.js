const User = require("../models/user");

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
    } catch (e) { 
        return next(e);
    }

};

const errorTest = async (req, res, next) => {
    // COde1
    // throw new Error("Bir Hata oluştu");
    // Code2
};

module.exports = { register, errorTest };