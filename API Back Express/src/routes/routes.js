import { Router } from "express";
import { getRegister, getRooms, getStates } from "../controllers/users.controller";
import { config } from "dotenv";
config();


const router = Router();

router.get("/registers", getRegister);
router.get("/rooms", getRooms);
router.get("/states", getStates);

export default router;
