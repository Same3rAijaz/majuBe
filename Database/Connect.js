// Importing Dependencies
import mongoose from "mongoose";
import { config } from "dotenv";
config()
// Enabling MongoDB Connection
const mongo_uri = process.env.MONGODB_URI
const DB = () => mongoose.connect(mongo_uri).then(() => {
    console.log("Databse Is SuccessFully Connected!")
}).catch((err) => {
    console.log(err?.message)
})

export default DB