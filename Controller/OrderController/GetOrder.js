import OrderModel from "../../Model/OrderModel.js";


const GetOrder = async (req, res) => {
    try {
        let Order = null
        if (req?.query?.id) {
            Order = await OrderModel.findById(req?.query?.id)
        } else if (req?.query?.resturant_id) {
            Order = await OrderModel.find({ resturant_id: req?.query?.resturant_id })
        } else if (req?.query?.user_id) {
            Order = await OrderModel.find({ resturant_id: req?.query?.resturant_id })
        } else {
            throw new Error("Please Provide atleast one id")
        }
    } catch (error) {
        res.status(400).send({ message: "Bad Request!" })
    }
}
export default GetOrder