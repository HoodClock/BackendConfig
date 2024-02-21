import User from '../models/User.js';
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res)=> {
    const {username, email, password} = req.body;

    const alreadyExistUser = await User.findOne({ email })

    if (alreadyExistUser){
        return res.status(400).json({ message: 'User already exists'})
    }
    
    const newUser = new User.create({
        username,
        email,
        password
    })

    await newUser.save();
    
})


export {registerUser}
