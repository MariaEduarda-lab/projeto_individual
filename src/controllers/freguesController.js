const FreguesService = require('../services/freguesService');

module.exports = {
    async index(req, res) {
        try {
            const fregueses = await FreguesService.getAll();
            res.status(200).json(fregueses);
        } catch (error) {
            res.status(500).json({ 
                error: 'Erro ao buscar fregueses',
                details: error.message 
            });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const fregues = await FreguesService.getById(id);
            
            if (!fregues) {
                return res.status(404).json({ 
                    error: 'Freguês não encontrado' 
                });
            }
            
            res.status(200).json(fregues);
        } catch (error) {
            res.status(500).json({ 
                error: 'Erro ao buscar freguês',
                details: error.message 
            });
        }
    },

    async store(req, res) {
        try {
            const novoFregues = await FreguesService.create(req.body);
            res.status(201).json(novoFregues);
        } catch (error) {
            res.status(400).json({ 
                error: 'Erro ao criar freguês',
                details: error.message 
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const freguesAtualizado = await FreguesService.update(id, req.body);
            res.status(200).json(freguesAtualizado);
        } catch (error) {
            res.status(400).json({ 
                error: 'Erro ao atualizar freguês',
                details: error.message 
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await FreguesService.delete(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ 
                error: 'Erro ao excluir freguês',
                details: error.message 
            });
        }
    }
};