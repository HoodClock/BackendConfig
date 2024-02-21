import User from '../models/user.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const loginedUser = asyncHandler(async (req, res) => {
    // reteriving the username and password from the frontend form 
    const { username, password } = req.body;

    // finding the current user who wannna logged In
    const user = await User.findOne({ username });

    // Apply the speacial methods of password comparing which was made in the user.model.js
    if (!user || !(await user.isPasswordCorrect(password))) {
        res.status(401).json({ message: "Username or Password is incorrect" });
    }

    res.status(200).json({ message: "User is Logged In Successfully" });

})

export { loginedUser }