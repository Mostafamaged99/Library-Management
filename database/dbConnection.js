import mongoose from "mongoose";

export const dbConnection =mongoose
  .connect("mongodb://localhost:27017/Library")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));