import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "First Name contains atleast 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "Last Name contains atleast 3 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
