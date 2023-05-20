import ReservationModel from "../../Model/ReservationModal.js";


const CreateReservation = async (req, res) => {
    try {
        const reservation = await new ReservationModel(req?.body).save()
        res.status(200).send({ message: "Reservation Created!", data: reservation })
    } catch (error) {
        res.status(400).send({ message: "Bad Request!" })
    }
}

export default CreateReservation