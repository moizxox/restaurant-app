import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/databaseConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoutes from "./routes/reservation.route.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRoutes);

dbConnection();

app.use(errorMiddleware);
export default app;
