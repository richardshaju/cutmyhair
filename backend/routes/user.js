import express from "express";
import { login, signin } from "../controllers/user.js";
import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({ storage })
const router = express.Router();

// router.post("/signin", upload.single('image', 10),signin)
router.post("/signin",signin)
router.post("/login", login)

export default router