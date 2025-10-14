import { Atributos } from "../models/atributtesModel.js";
import { Pousada } from "../models/pousadaModel.js";


export const findPousadas = async (req, res) => {
    try {
        const pousadas = await Pousada.findAll({
            include: [{ model: Atributos, as: 'atributos' }]
        });
        res.json(pousadas); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao recuperar pousadas" });
    }
};

export const createPousada = async (req, res) => {
    try {
        const { name, city, state, address, type, contact, contactName, minCost, hasCredential, kmRef  } = req.body;
        const newPousada = await Pousada.create({ name, city, state, address, type, contact, contactName, minCost, hasCredential, kmRef, include: [{ model: Atributos, as: 'atributos' }] });
        res.status(201).json(newPousada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pousada" });
    }   
};

export const deletePousada = async (req, res) => {
    try {
        const { id } = req.params;
        await Pousada.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar pousada" });
    }   
};