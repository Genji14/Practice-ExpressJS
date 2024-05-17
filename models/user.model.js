const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    fullname: {
        type: String,
    },
    role: {
        type: String,
    },
    project: [String],
    activeYn: {
        type: Boolean,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;