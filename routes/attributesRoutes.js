import express from "express";

import { findAttribute, createAttribute, deleteAttribute } from "../controllers/attributesController.js";

const router = express.Router();

router.get("/", findAttributes);
router.post("/", createAttribute);
router.delete("/:id", deleteAttribute);

export default router;