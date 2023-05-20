// Importing Dependencies
import express from "express"
import cors from "cors"
import { config } from "dotenv"
// Importing Database
import mongoClient from "./Database/Connect.js"

// Configuring ENV
config()

// Declearing Server as Express 
const server = express()

// enabling Server for additional services
server.use(cors())
server.use(express.json())


// Enabling Server For Communication
const port = process.env.PORT || 4000
server.listen(port, () => {
    console.info(`Server Is Runing On Port: ${port}`)
    mongoClient()
})