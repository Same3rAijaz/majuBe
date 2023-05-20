// Importing Dependeincies And Model
import ResturantModel from "../../Model/ResturantModel.js"


const CreateResturants = async (req, res) => {
    try {
        const response = await new ResturantModel(req?.body).save()
        res.status(200).send({ message: "Resturant Created!", data: response })
    } catch (error) {
        res.status(400).send({ message: "Bad Request!" })
    }
}
export default CreateResturants