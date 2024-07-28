const User = require("../models/user");
const customError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInputs, comparePassword } = require("../helpers/input/inputHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {

    // POST DATA
    /*
    const name = "Ali Aliz";
    const email = "aali@gmail.com";
    const password = "123456";
    */

    /* // Before 'express-async-handler' package
    // try catch
    try{
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
    }
    catch(err){
        return next(err);
    }
    */

    const { name, email, password, role } = req.body;

    // async await
    const user = await User.create({
        name,
        email,
        password,
        role
    });

    sendJwtToClient(user, res);
});

/*
const errorTest = async (req, res, next) => {
    // COde1
    // throw new Error("Bir Hata oluştu");
    // return next(new CustomError("Bir Custom Hata oluştu", 400));
    // Code2
};
*/

const login = asyncErrorWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!validateUserInputs(email, password)) {
        return next(new customError("Please Check Your Inputs", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!comparePassword(password, user.password)) {
        return next(new customError("Check Password", 400));
    }

    sendJwtToClient(user, res);
});

const getUser = (req, res, next) => {
    res.json({
        success: true,
        data: {
            id: req.user.id,
            name: req.user.name,
        }
    });
}

module.exports = { register, getUser, login };