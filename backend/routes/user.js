import express from "express";
import { login, signin } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin)
router.post("/login", login)

export default router