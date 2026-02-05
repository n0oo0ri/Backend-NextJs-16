import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connect = async() => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("MongoDB is already connected.");
        return;
    }

    if (connectionState === 2) {
        console.log("Connecting to MongoDB...");
        return;
    }
    
    try {
        mongoose.connect(MONGO_DB_URL!, {
            dbName: "next16restapi",
            bufferCommands: true,
        });
        console.log("MongoDB connected successfully.");
    } catch (err: any) {
        console.error("Erroe :", err);
        throw new Error("Error :", err);
    } 
};

export default connect;