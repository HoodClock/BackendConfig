import User from '../models/User.js';
import apiError from '../utils/error.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const registerUser = asyncHandler( async (req, res)=> {
    const {username, email, password, fullname} = req.body;
    
    // now validation
    if ([username, email, password, fullname].some((elem)=> elem?.trim() === "")){
        throw new apiError(401, "An Error occured while", "please fill all the credentials.");
    }
    if (!email || !email.includes("@")) {
        throw new apiError(401, "An Error occured while", "@ sign is missing.");
    }
    // check if the user already exsits
    const exsited_User = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (exsited_User){
        throw new apiError(409, "An Error occured", "User Does not exsist.");
    }
    // now multer gives us the req.files and retrive the files
    const avatarfilePath = req.files?.avatar[0]?.path
    const coverImagefilePath = req.files?.coverImage[0]?.path

    // if error occured in fetching file path
    if (!avatarfilePath){
        throw new apiError(404, "An Error occured|", "path file not found")
    }

    // saving the files Cloudinary
    const avatar = await uploadOnCloudinary(avatarfilePath);
    const coverImage = await uploadOnCloudinary(coverImagefilePath);

    // again check 
    if (!avatar){
        throw new apiError(404, "An Error occured|", "path file not found")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        username,
        email,
        password
    })

    // check if the user is createdd
    const createdUser = await User.findById(user._id).select(
        // these two not included in user
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new apiError(500, "An Error occured while", "registring the user")
    }

    return res.status(201).json({createdUser});
})

export {registerUser}
