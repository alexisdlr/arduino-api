import { Router } from "express";
import { postArduino, getArduino} from "../controllers/arduino.controller.js";

const router = Router()

router.get('/', getArduino)
router.post('/', postArduino)


export default router