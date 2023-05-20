// Importing Dependencies
import { Schema, model } from "mongoose";

// Defining User InfraStructure
const ResturantModal = new Schema({
    name: { type: String },
    picture: { type: String },
    category: { type: Array },
    price_range: { type: Number },
    description: { type: String },
    location: { city: { type: String }, country: { type: String } },
    timings: { open: { type: Date }, close: { type: Date } },
    menu: [{
        name: { type: String },
        picture: { type: String },
        price: { type: Number },
        category: { type: Array },
        description: { type: String }
    }]
})
// Defining Collection Name MongoDB
const UserModel = model('resturants', ResturantModal)
export default UserModel