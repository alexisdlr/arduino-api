import { Router } from "express";
import { postArduino } from "../controllers/arduino.controller.js";

const router = Router()

router.get('/')
router.post('/', postArduino)


export default router