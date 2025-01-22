import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
  });
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: addressSchema,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin','Customer'],
      default: 'Customer',
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userSchema);
export default user;