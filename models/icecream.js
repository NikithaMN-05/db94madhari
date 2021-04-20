const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavour: String,
    color: String,
    cost: Number
})
module.exports = mongoose.model("icecream", icecreamSchema)