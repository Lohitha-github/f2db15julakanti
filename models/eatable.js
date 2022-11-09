const mongoose = require("mongoose")
const eatableSchema = mongoose.Schema({
eatable_name: String,
flavor: String,
price: Number
})
module.exports = mongoose.model("",
eatableSchema)