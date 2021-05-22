import { Router } from "express";
import cheeses from "./cheeses";

const router = Router();
router.use("/cheeses", cheeses);

export default router;
