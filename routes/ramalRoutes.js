import express from "express";

import { findRamais, createRamal, deleteRamal } from "../controllers/ramalController.js";

const router = express.Router();

router.get("/", findRamais);
router.post("/", createRamal);
router.delete("/:id", deleteRamal);

export default router;