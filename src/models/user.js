import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true, // in Searching we can set {index: true} so it will optimize the process
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String, // use cloudinary url
        required: true
    },
    coverImage: {
        type: String, // use cloudinary url
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    refreshToken: {
        type: String
    }
},
    {
        timestamps: true
    }
)

// Here we are using the mongoose in built middleWares check this link["https://mongoosejs.com/docs/middleware.html"]

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// we can also make the methods just like pre [it checks that the password mathces or not]
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// declaring other methods for jsonWebTokens
userSchema.methods.generateAccessToken = function(){

// This requires {PAYLOAD} && {ACCESS_TOKEN} && {ACCESS_TOKEN_EXPIRY}
    jwt.sign({
        // THIS IS PAYLOAD
        _id: this._id, // this is mandatory but others are optional
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    // THIS IS ACCESS_TOKEN
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

// refresh Token will remain same as access token but with less payload
userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id: this._id, // this is mandatory
    },
    // THIS IS ACCESS_TOKEN
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

export default mongoose.model("User", userSchema);