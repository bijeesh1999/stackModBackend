const mongoose = require("mongoose")


const answerSchema = new mongoose.Schema({
  answer:String,
  questionId:String
},{
    timestamps:true
})

module.exports = mongoose.model('answer',answerSchema)