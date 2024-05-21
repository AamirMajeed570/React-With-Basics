import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,serverSelectionTimeoutMS:30000}).then(()=>{
            console.log("Database Connected")
        })
    } catch (error) {
        console.log("Error", error.message)
    }
    // console.log("hello");
    // console.log(process.env.MONGO_URI)
}

