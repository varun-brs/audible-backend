import express from "express";
import {
  addCategory,
  getCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/addcategory", addCategory);

export default router;
