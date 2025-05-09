import errorHandler from "../error/error.js";
import { Reservation } from "../models/reservation.model.js";

export const createReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new errorHandler("Please fill all the fields", 400));
  }
  if (phone.length !== 11)
    return next(new errorHandler("Phone number must be of 11 digits", 400));
  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });
    res.status(200).json({ success: true, message: "Reservation created" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error) => error.message
      );
      return next(new errorHandler(validationErrors.join(","), 400));
    }
  }
};
