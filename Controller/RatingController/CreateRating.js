// Import Dependencies
import RatingModal from "../../Model/RatingModel.js"

const CreateRating = async (req, res) => {
    try {
        await new RatingModal(req?.nody).save()
        return res.status(200).send({ message: "Rating Created!" })
    } catch (error) {
        return res.status(400).send({ message: "Bad Request!" })
    }
}
export default CreateRating;