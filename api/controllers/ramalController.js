import { Ramal } from "../models/ramalModel.js";


export const getRamais = async (req, res) => {
    try {
        const ramais = await Ramal.findAll();
        res.json(ramais);
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar ramais" });
    }
};