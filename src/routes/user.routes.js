import {Router} from "express";
// here we import register_User controller that contain method registerUser
import { registerUser } from "../controllers/user.controller.js"; 

const router = Router();

// now tell the router to where it will go
router.route("/register").post(registerUser)


export default router 

// http://localhost:8000/api/v1/users/register