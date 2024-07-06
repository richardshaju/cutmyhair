import express from "express";
import { addService, login, signin } from "../controllers/saloon.js";

const router = express.Router();

router.post("/signin", signin)
router.post("/login", login)
router.post("/addService", addService)

export default router