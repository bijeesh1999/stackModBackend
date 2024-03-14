 
const express=require("express") 
const {userRegister} = require("../controller/userLoginRegister")
const router=express.Router() 


router.route("/register").post(userRegister)

// router.route("/:id").get().put()




module.exports=router