import { Router } from "express";
import {
  createTrip,
  getTrips,
} from "../controllers/trip.controller";

const router = Router();

router.post("/generate", createTrip);
router.get("/", getTrips);

export default router;