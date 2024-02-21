import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();


// MIDDLE_WARES configration
app.use(cors({
    // it is used in produciton level but simple will work as well[app.use(cors())]
    origin: process.env.CORS_ORIGIN
}));

app.use(express.json({
    // we can set limit as well
    limit: '16kb'
}))

app.use(express.urlencoded({extended: true, limit: '16kb'}));

app.use(express.static("public"));

app.use(cookieParser());

// routes Import
import userRouter from './routes/user.routes.js'
import loginRouter from './routes/login.routes.js'


// routers declaration [we can use middle_wares app.use instead of app.get..]
app.use("/api/v1/user", userRouter);
app.use("/api/v2/login", loginRouter);


export {app}