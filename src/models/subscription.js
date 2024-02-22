import mongoose, {Schema} from "mongoose";


const subscribeSchema = new Schema({
    subcriber: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})


export const subscribe = mongoose.model("Subcriber", subscribeSchema);