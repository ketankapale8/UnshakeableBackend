import express from 'express';
import UserRouter from './routes/User.js';
import NotificationRouter from './routes/Tokens.js'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors'

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(fileUpload({
    limits:{
        fileSize : 50 * 1024 * 1024
    },
    useTempFiles: true
}))

const corsOptions = {
    origin : "http://localhost:3000",
    credentials : true , 
    methods : 'GET ,POST ,PUT , PATCH , DELETE , OPTIONS',
    allowedHeaders : 'X-Requested-With , Content-Type , Authorization'
}

app.use(cors())

app.use('/api/v1', UserRouter);
app.use('/api/v1', NotificationRouter);


app.get('/', (req,res)=>{
    res.send('Running Credimotion Backend..')
})

