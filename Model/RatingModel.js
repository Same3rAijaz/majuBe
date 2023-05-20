// Importing Dependencies
import { Schema, model } from "mongoose";

// Defining User InfraStructure
const RatingModal = new Schema({
    resturant_id: { type: Schema.Types.ObjectId, ref: 'resturants' },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    description: { type: String },
    rating: { type: Number }
})

// Defining Collection Name MongoDB
const RatingModel = model('ratings', RatingModal)
export default RatingModel