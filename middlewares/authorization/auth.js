const customError = require('../../helpers/error/CustomError');
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require('../../helpers/authorization/tokenHelpers');
const e = require('express');

const getAccessToRoute = (req, res, next) => {
    const { JWT_SECRET_KEY } = process.env;

    if (!isTokenIncluded(req)) {
        // 401: Unauthorized Error
        // 403: Forbidden Error
        return next(new customError("No Auth token", 401));
    }

    const accessToken = getAccessTokenFromHeader(req);

    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new customError("Time Limit Auth token", 401));
        }

        req.user = {
            id: decoded.id,
            name: decoded.name,
        }

        console.log(decoded);
        next();
    });
}

module.exports = {
    getAccessToRoute
}
