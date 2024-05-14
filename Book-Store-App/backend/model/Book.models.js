import mongoose from 'mongoose'
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique:true,
      uppercase:true,
    },
    author: {
      type: String,
      required: true,
      uppercase:true,
    },
    publishYear: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Book = mongoose.model('Book',bookSchema);