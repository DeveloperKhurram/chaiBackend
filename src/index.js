// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

let PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error:", err);
      throw err;
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection failed !!!", err));
