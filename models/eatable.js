const mongoose = require("mongoose")
const eatableSchema = mongoose.Schema({
eatable_name: {
    type:String,
    required:true,
    minLength:1,
    
},
flavor: String,
price: {
    type:Number,
    min:0,
    required:true
}
})
module.exports = mongoose.model("",
eatableSchema)