import mongoose, { Schema } from "mongoose";
interface User {
    name: string,
    email: string,
    password: string,
    phone?: string,
    gender?: "Male" | "Female",
    dob?: Date,
    location?: string,
    description?: string,
    profilePic?: string,
    interests?: string[],
    profileCompleted?: boolean,
}
const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    dob: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    profilePic: {
        type: String
    },
    interests: [
        {
            type: String
        }
    ],
    profileCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const User = mongoose.model<User>("User", userSchema)
export default User;