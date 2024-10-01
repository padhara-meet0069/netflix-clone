import mongoose from "mongoose";
import { ENV_VAARS } from "./envVars.js";


export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(ENV_VAARS.MONGO_URI);
        console.log("MongoDB connected: "+ conn.connection.host)
    }catch(error){
        console.error("Error connecting to MONGODB: "+ error.massage);
        process.exit(1);
    }
}