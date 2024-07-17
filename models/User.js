const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", UserSchema);
