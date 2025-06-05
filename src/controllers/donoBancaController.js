const DonoBancaService = require('../services/donoBancaService');

module.exports = {
    async index(req, res) {
        try {
            const donos = await DonoBancaService.getAll();
            res.json(donos); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const dono = await DonoBancaService.getById(id);
            if (!dono) {
                return res.status(404).json({ error: 'Dono não encontrado' });
            }
            res.json(dono); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async store(req, res) {
        try {
            const novoDono = await DonoBancaService.create(req.body);
            res.status(201).json(novoDono); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const donoAtualizado = await DonoBancaService.update(id, req.body);
            res.json(donoAtualizado); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
};