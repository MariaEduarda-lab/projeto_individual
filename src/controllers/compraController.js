const CompraService = require('../services/compraService');

module.exports = {
    async index(req, res) {
        try {
            const compras = await CompraService.getAll();
            res.status(200).json(compras);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao listar compras',
                details: error.message
            });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const compra = await CompraService.getById(id);
            
            if (!compra) {
                return res.status(404).json({
                    error: 'Compra não encontrada'
                });
            }
            
            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao buscar compra',
                details: error.message
            });
        }
    },

    async store(req, res) {
        try {
            const novaCompra = await CompraService.create(req.body);
            res.status(201).json(novaCompra);
        } catch (error) {
            res.status(400).json({
                error: 'Erro ao criar compra',
                details: error.message
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const compraAtualizada = await CompraService.update(id, req.body);
            res.status(200).json(compraAtualizada);
        } catch (error) {
            res.status(400).json({
                error: 'Erro ao atualizar compra',
                details: error.message
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await CompraService.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao excluir compra',
                details: error.message
            });
        }
    }
};