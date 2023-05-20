// Importing Dependencies
import { model, Schema } from "mongoose";

// Defining User InfraStructure
const UserModal = new Schema({
    name: { type: String },
    gender: { type: Number },
    phone: { type: Number },
    password: { type: String },
    picture: { type: String },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "orders"
    }],
    reviewd_resturants: [{
        type: Schema.Types.ObjectId,
        ref: "ratings"
    }]
})

// Defining Collection Name MongoDB
const UserModel = model('users', UserModal)
export default UserModel;