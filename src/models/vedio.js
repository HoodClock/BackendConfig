import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // used to make the aggregaiotn querries


const videoSchema = new Schema({
    videoFile: {
        type: String, // cloudinary url
        required: true
    },
    thumbNail: {
        type: String, // cloudinary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // cludinary url
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    views: {
        type: Number,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: ture
    }
)

videoSchema.plugin(mongooseAggregatePaginate); // now we can write some aggregation qurries 


export const Video = mongoose.model("Video", videoSchema);  