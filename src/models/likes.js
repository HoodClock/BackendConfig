import mongoose, {Schema} from "mongoose";


const likesSchema = new Schema({
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    }, 
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
}, {
    timestamps: true
})