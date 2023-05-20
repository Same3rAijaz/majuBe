// Importing Dependencies
import { Schema, model } from "mongoose";

// Defining User InfraStructure
const OrderModal = new Schema({
    resturant_id: { type: Schema.Types.ObjectId, ref: 'resturants' },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    menu: { type: Array },
    price: { type: Number },
    status: { type: String }
})

// Defining Collection Name MongoDB
const OrderModel = model('orders', OrderModal)
export default OrderModel