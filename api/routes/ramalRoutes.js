import express from "express";

import {getRamais} from "../controllers/ramalController.js";

const router = express.Router();

router.get("/", getRamais);

export default router;