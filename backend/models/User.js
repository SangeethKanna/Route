const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    route:{
        type: String,
        required: true,
    },

})

module.exports = user = mongoose.model("user", UserSchema);