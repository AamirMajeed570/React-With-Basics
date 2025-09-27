import mongoose from "mongoose";
const URI = process.env.MONGO_URI;
export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://aamirmajeedkhan570_db_user:qF1ljXsOSuaPmGDy@cluster0.sknlprf.mongodb.net/marriage").then(()=>{
        console.log("Database Connected Succesfully")
    }).catch((err)=>{
        console.log("Some error ocurred in MongoDb",err)
    })
}
