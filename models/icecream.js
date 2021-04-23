const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavour: String,
    color: {type :String , minLength : 4},
    cost: {type : Number , min : 10 , max : 100}
})
module.exports = mongoose.model("icecream", icecreamSchema)