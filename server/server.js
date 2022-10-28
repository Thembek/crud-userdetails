import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import route from './route/user.js';

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/', route);

dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }    
)
.then(() => {
    console.log(`Running is port: http://localhost:${process.env.PORT} \n MongoDB connected successfully.`)
})
.catch((error) => { 
    console.log(error)
});


