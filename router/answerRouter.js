 
const express=require("express") 
const {createAnswer , getAllAnswer} = require("../controller/answerController")
const router=express.Router() 


router.route("/").get(getAllAnswer).post(createAnswer)

// router.route("/:id").get().put()




module.exports=router