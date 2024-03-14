 
const express=require("express") 
const {createQuestion , getAllQuestion} =require('../controller/questionControlle')
const router=express.Router() 


router.route("/").post(createQuestion)

router.route("/").get(getAllQuestion)

// router.route("/:id").get().put()




module.exports=router