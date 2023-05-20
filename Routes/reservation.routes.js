import { Router } from "express";
import * as Reservation from "../Controller/ReservationController/index.js"

const router = Router()
router.post('/create', Reservation.createReservation)
router.get('/', Reservation.getReservation)

export default router