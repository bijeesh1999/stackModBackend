const mongoose = require("mongoose")


const dbConnection = async () =>{
    const connected = await mongoose.connect("mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/")
    if(connected){
        console.log("mongoDb Connected");
    }else{
        console.log("connection error");
    }
}


module.exports = dbConnection;