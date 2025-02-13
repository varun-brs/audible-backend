import express from "express";
import { checkToken } from "../middlewares/authMiddleware.js";
import {
  createAudioBook,
  getAudioBooks,
} from "../controllers/audioBooksController.js";

const router = express.Router();

router.post("/register", checkToken, createAudioBook);
router.get("/getaudiobooks", checkToken, getAudioBooks);

export default router;
