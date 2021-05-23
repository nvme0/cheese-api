import { Router } from "express";
import path from "path";

import v1 from "./api/v1";

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
});

router.use("/api/v1", v1);

export default router;
