import express from "express";
import { addService, bookReservation, getReservation, login, signin } from "../controllers/saloon.js";

const router = express.Router();

router.post("/signin", signin)
router.post("/login", login)
router.post("/addService", addService)

router.post("/reservation", bookReservation)
router.get("/reservation/:id", getReservation)


export default router