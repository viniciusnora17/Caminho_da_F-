import express from "express";

import { findAtributos, createAtributos, deleteAtributo } from "../controllers/atributosController.";

const router = express.Router();

router.get("/", findAtributos);
router.post("/", createAtributos);
router.delete("/:id", deleteAtributo);

export default router;