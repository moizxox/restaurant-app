import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Resturant",
    })
    .then(() => console.log("Database Connected"))
    .catch((err) =>
      console.log("Error occured while connecting Database", err)
    );
};
