import { Schema, model } from "mongoose";

const ReservationModal = new Schema({
    persons: { type: Number },
    resturant_id: { type: Schema.Types.ObjectId, ref: "resturansts" },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    status: { type: String, default: "booked" },
    timing: { type: Date }
})

const ReservationModel = model('reservations', ReservationModal)

export default ReservationModel