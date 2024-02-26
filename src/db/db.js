import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => {
    try {
        const connectionInstense = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`Successfully Connected to MongoDB ${connectionInstense.connection.host}`);
    } catch (err) {
        console.log("mongodb connection error", err)
        process.exit(1); // build in method (used to end the process which is running at the same time with an exit code in NodeJS.)
    }
}

export default connectdb;