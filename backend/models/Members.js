const mongoose = require("mongoose")


const MembersSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const MembersModel = mongoose.model("gymclients",MembersSchema)
module.exports = MembersModel