const MercadoriaService = require('../services/mercadoriaService');

module.exports = {
    async index(req, res) {
        try {
            const mercadorias = await MercadoriaService.getAll();
            res.status(200).json(mercadorias);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao listar mercadorias',
                details: error.message
            });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const mercadoria = await MercadoriaService.getById(id);
            
            if (!mercadoria) {
                return res.status(404).json({
                    error: 'Mercadoria não encontrada'
                });
            }
            
            res.status(200).json(mercadoria);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao buscar mercadoria',
                details: error.message
            });
        }
    },

    async store(req, res) {
        try {
            const novaMercadoria = await MercadoriaService.create(req.body);
            res.status(201).json(novaMercadoria);
        } catch (error) {
            res.status(400).json({
                error: 'Erro ao criar mercadoria',
                details: error.message
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const mercadoriaAtualizada = await MercadoriaService.update(id, req.body);
            res.status(200).json(mercadoriaAtualizada);
        } catch (error) {
            res.status(400).json({
                error: 'Erro ao atualizar mercadoria',
                details: error.message
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await MercadoriaService.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao excluir mercadoria',
                details: error.message
            });
        }
    }
};