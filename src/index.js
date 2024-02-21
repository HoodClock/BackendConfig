// require('dotenv').config
import dotenv from 'dotenv'
import connectdb from "./db/db.js";
import { app } from './app.js';

dotenv.config({
    path: "./env"
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listinig on Port:  ${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("MongoDB Error Failde", err);
})


// We can make the IFFE. It is the first apprach 
/*
import express from "express";
const app = express();

;( async()=>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // we can show the error 
        app.on('error', (err)=>{
            console.log("Error: ", err);
        })
        // we can listen to the PORT as well
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is listening on PORT ${process.env.PORT}`)
        })

    }catch(error){
        console.error("Error: ", error)
        throw error
    }
}) */