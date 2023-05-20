// Importing Dependencies and Models
import ResturantModal from "../../Model/ResturantModel.js"
import RatingModal from "../../Model/RatingModel.js"

const GetAllResturants = async (req, res) => {
    try {
        if (req?.query?.id) {
            const resturants = await ResturantModal.findById(req?.query?.id)
            const ratings = await RatingModal.find({ resturant_id: req?.query?.id })
            let rating = 0
            const total_rating = ratings?.length > 0 ? ratings?.length : 1
            ratings.map((obb, i) => {
                return rating += obb.rating
            })
            resturants['rating'] = Math.ceil(Number(rating) / Number(total_rating)) ?? rating
            return res.status(200).send({ message: "All Resturants!", data: resturants })
        } else {
            const resturants = await ResturantModal.find()
            for (let index = 0; index < resturants.length; index++) {
                let element = resturants[index];
                const ratings = await RatingModal.find({ resturant_id: element?._id })
                let rating = 0
                const total_rating = ratings?.length > 0 ? ratings?.length : 1
                ratings.map((obb, i) => {
                    return rating += obb.rating
                })
                resturants[index]['rating'] = Math.ceil(Number(rating) / Number(total_rating)) ?? rating
                return res.status(200).send({ message: "All Resturants!", data: resturants })
            }
        }
    } catch (error) {
        console.log(error?.message)
        return res.status(400).send({ message: "Bad Request!" })
    }
}
export default GetAllResturants