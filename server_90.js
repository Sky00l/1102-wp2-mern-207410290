import express from 'express';
const app = express();


import dotenv from 'dotenv';
dotenv.config();

import connectDB_90 from './db/connect_90.js';

app.get('/',(req,res)=> {
    res.send('Welcome yun 207410290');
});

const port = process.env.PORT || 5000;


const start = async () => {
    try{
        await connectDB_90(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB')
        })
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }catch(err){
        console.log(err)
    }
}

start();