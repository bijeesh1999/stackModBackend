const mongoose = require("mongoose")


const questionSchema = new mongoose.Schema({
  Question: {
    type: String,
  },
},{
    timestamps:true
})

module.exports = mongoose.model('question',questionSchema)