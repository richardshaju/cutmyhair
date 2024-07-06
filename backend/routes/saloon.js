import express from "express";
import { addService, bookReservation, getReservation, getSaloons, login, signin } from "../controllers/saloon.js";

const router = express.Router();

router.post("/signin", signin)
router.post("/login", login)
router.post("/addService", addService)

router.post("/reservation", bookReservation)
router.get("/reservation", getReservation)

router.get("/getSaloons", getSaloons)


export default router