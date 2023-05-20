import ReservationModel from "../../Model/ReservationModal.js";
import ResturantModel from "../../Model/ResturantModel.js"
import UserModel from "../../Model/ResturantModel.js";

const GetReservation = async (req, res) => {
    try {
        let reservations = null
        let resturant = null
        let user = null
        if (req?.query?.resturant_id) {
            reservations = await ReservationModel.find({ resturant_id: req?.query?.resturant_id })
            resturant = await ResturantModel.findById(req?.query?.resturant_id)
        } else if (req?.query?.user_id) {
            reservations = await ReservationModel.find({ user_id: req?.query?.user_id })
            user = await UserModel.findById(req?.query?.user_id)
        }
        else {
            throw new Error("Please Provide ID")
        }
        return res.status(200).send({ message: "Success!", data: reservations })
    } catch (error) {
        return res.status(400).send({ message: "Bad Request!" })
    }
}

export default GetReservation