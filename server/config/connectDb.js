import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)  
        console.log("mongodb connected succesfully");
        
    } catch (error) {
        console.error(`Database error ${error.message}`);
    }
}

export default connectDb;