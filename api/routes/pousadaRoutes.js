import express from "express";

import { findPousadas, createPousada, deletePousada } from "../controllers/pousadaController.js";

const router = express.Router();

router.get("/", findPousadas);
router.post("/", createPousada);
router.delete("/:id", deletePousada);

export default router;