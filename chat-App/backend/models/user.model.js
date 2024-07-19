import mongoose from 'mongoose'

const userSchema = mongoose.model(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    }
  },
  { timestaps: true }
)
const User = mongoose.model("User",userSchema)
module.exports = User;