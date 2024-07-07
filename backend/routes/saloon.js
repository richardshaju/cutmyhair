import express from "express";
import { addService, bookReservation, getParticularService, getServiceReservation, getSaloons, getServices, login, signup } from "../controllers/saloon.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/addService", addService)

router.post("/reservation", bookReservation)
router.post("/getServiceReservation", getServiceReservation)

router.get("/getSaloons", getSaloons)
router.post("/getServices", getServices)
router.post("/getParticularService", getParticularService)
export default router