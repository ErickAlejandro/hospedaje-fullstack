import { Router } from "express";
import { getRegister, getRooms, getStates, handleRegister } from "../controllers/users.controller";
import { config } from "dotenv";
config();
import { withDBConnection, releaseDBConnection } from "../controllers/dbMiddleware";


const router = Router();

router.get("/registers", withDBConnection,getRegister);
router.get("/rooms", withDBConnection,getRooms);
router.get("/states", withDBConnection,getStates);

router.post('/newRegister', handleRegister); // POST
router.put('/rooms/:id', handleRegister); // PUT

router.use(releaseDBConnection);

export default router;
