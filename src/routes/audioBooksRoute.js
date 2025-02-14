import express from "express";
import { checkToken } from "../middlewares/authMiddleware.js";
import {
  createAudioBook,
  getAudioBooks,
  searchAudioBooks,
  updateAudioBook,
  deleteAudioBook,
} from "../controllers/audioBooksController.js";

const router = express.Router();

router.post("/register", checkToken, createAudioBook);
router.get("/getaudiobooks", checkToken, getAudioBooks);
router.get("/search", checkToken, searchAudioBooks);
router.patch("/editaudiobooks/:id", checkToken, updateAudioBook);
router.delete("/deleteaudiobooks/:id", checkToken, deleteAudioBook);

export default router;
