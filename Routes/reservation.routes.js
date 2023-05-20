import { Router } from "express";
import * as Reservation from "../Controller/ReservationController/index.js"
import JWTVerify from "../Middleware/JWTverify.js";

const router = Router()
router.post('/create', JWTVerify, Reservation.createReservation)
router.get('/', JWTVerify, Reservation.getReservation)

export default router