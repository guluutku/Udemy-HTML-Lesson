const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Provide a name"]
    },

    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "This email is in use"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email"
        ]
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },

    password: {
        type: String,
        minlenght: [6, "Password needs to be minimum 6 character"],
        required: [true, "Please provide password"],
        select: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    title: {
        type: String,
    },

    about: {
        type: String,
    },

    place: {
        type: String,
    },

    website: {
        type: String,
    },

    profile_image: {
        type: String,
        default: "default.jpg"
    },

    blocked: {
        type: Boolean,
        default: false
    }
});

// UserSchema Methods
UserSchema.methods.generateJWTFromUser = function () {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    const payload = {
        id: this._id,
        name: this.name
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE,
    });

    return token;
}

// Pre Hook
UserSchema.pre("save", function (next) {
    // 'this' show the data that about to send to database
    // console.log(this.password);

    // Change password
    if (!this.isModified("password")) {
        next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            // Store hash in your password DB.
            this.password = hash;

            next();
        });
    });
});

module.exports = mongoose.model("User", UserSchema);
