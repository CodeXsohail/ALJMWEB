const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    }
});

const User = mongoose.model("User",usersSchema);

module.exports = User;