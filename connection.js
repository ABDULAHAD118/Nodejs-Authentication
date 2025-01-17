import mongoose from "mongoose";

const connection = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export default connection;