import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const app = express()

const port = process.env.PORT
const db_link = process.env.MONGODB_URI


const connectDB = async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${db_link}/${DB_NAME}`)
        console.log(`connected succesfully on port ${port} ${connectionInstance.connection.host }`)
    } catch (error) {
        console.log("error",error)
        process.exit(1)
    }
}

export default connectDB;