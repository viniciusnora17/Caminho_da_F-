import { Ramal } from "../models/ramalModel.js";


export const findRamais = async (req, res) => {
    try {
        const ramais = await Ramal.findAll({
            include: [{ model: Pousada, as: 'pousadas' }]
        });
        res.json(ramais); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar ramais" });
    }
};

export const createRamal = async (req, res) => {
    try {
        const { cityRegion } = req.body;
        const newRamal = await Ramal.create({ cityRegion });
        res.status(201).json(newRamal);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar ramal" }); 
    }   
};

export const deleteRamal = async (req, res) => {
    try {
        const { id } = req.params;
        await Ramal.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar ramal" });
    }   
};