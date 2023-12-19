import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs";
import cors from "cors";
import Data from "./models/Data.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", true);


// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Error connecting to the database:", error));

app.get("/getAllData", async (req, res) => {
  try {
    let response = await Data.find();
    res.json({ data: response, status: "success" });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

// const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

// import data to MongoDB
const importData = async () => {
  try {
    // Uncomment this line if you have the 'data' variable defined.
    // await Data.create(data);
    console.log("Data successfully imported");
    // To exit the process
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
  }
};

// importData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
