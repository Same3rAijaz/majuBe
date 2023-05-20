// Importing Dependencies
import express from "express"
import cors from "cors"
import { config } from "dotenv"
// Importing Routes
import ResturantRoutes from "./Routes/resturant.routes.js"
import RatingRouter from "./Routes/rating.routes.js"
import OrderRouter from "./Routes/order.routes.js"
import ReservationRouter from "./Routes/reservation.routes.js"
// Importing Database
import mongoClient from "./Database/Connect.js"

// Configuring ENV
config()

// Declearing Server as Express 
const server = express()

// enabling Server for additional services
server.use(cors())
server.use(express.json())

// Enabling Routes
server.use('/resturant', ResturantRoutes)
server.use('/rating', RatingRouter)
server.use('/order', OrderRouter)
server.use('/reservation', ReservationRouter)


// Enabling Server For Communication
const port = process.env.PORT || 4000
server.listen(port, () => {
    try {
        console.info(`Server Is Runing On Port: ${port}`)
        mongoClient()
    } catch (error) {
        console.log(error?.message)
    }
})