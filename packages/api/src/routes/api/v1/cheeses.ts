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

  // TODO Add persistence mechanism
  const requestedCheese = cheeses.find((cheese) => cheese.id === id);
  if (requestedCheese) {
    res.send(requestedCheese);
  } else {
    res.sendStatus(404);
  }
});

// TODO Add POST (create cheese)

// TODO Add PUT (update cheese)

// TODO Add DELETE (delete cheese)

export default router;
