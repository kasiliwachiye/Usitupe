import { Router } from "express";
const router = Router();
import { getCategories } from "../store/categories";

router.get("/", (req, res) => {
  const categories = getCategories();
  res.send(categories);
});

export default router;
