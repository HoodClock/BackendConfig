import {Router} from "express";
// here we import register_User controller that contain method registerUser
import { registerUser } from "../controllers/user.controller.js";

// importing the upload multer middleware to attch files with the url
import {upload} from "../middlewares/multer.js";

const router = Router();

// now tell the router to where it will go
router.route("/register").post(
    upload.fields([ 
        {
            name: "avatar",
            maxCount: 1
        },{
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)


export default router 

// http://localhost:8000/api/v1/users/register