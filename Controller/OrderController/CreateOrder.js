// Importing Dependencies
import OrderModel from "../../Model/OrderModel.js"

const CreateOrder = async (req, res) => {
    try {
        new OrderModel({ ...req?.body, status: "Order Placed!" }).save()
    } catch (error) {
        res.status(400).send({ message: "Bad Request!" })
    }
}
export default CreateOrder