import express from "express";
import { login, signin } from "../controllers/user.js";
import multer from 'multer'
const storage = multer.memoryStorage()
const router = express.Router();

router.post("/signin",signin)
router.post("/login", login)

export default router