import { Router } from "express";
import loginUser from '../controllers/login.controller.js'

const router = Router();

router.route("/loginUser").post(loginUser);


export default router;