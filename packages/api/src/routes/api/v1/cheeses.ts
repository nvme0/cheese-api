import { Router } from "express";
import cheeses from "../../../__MOCKS__/cheeses";

const router = Router();

router.get("/", (req, res) => {
  res.send(cheeses);
});

router.get("/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const requestedCheese = cheeses.find((cheese) => cheese.id === id);
  if (requestedCheese) {
    res.send(requestedCheese);
  } else {
    res.sendStatus(404);
  }
});

export default router;
