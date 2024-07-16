const customErrorHandler = (req, res, next) => {
    console.log(err);

    req.statusCode(400).json({
        success: false,
    });
};

module.exports = customErrorHandler;
