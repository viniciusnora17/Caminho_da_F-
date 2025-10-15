import express from "express";
import cors from "cors";
import ramalRoutes from "./routes/ramalRoutes.js";
import pousadaRoutes from "./routes/pousadaRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/ramais", ramalRoutes);
app.use("/pousadas", pousadaRoutes);
app.use("/atributos", atributosRoutes);

export default app;