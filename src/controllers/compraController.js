const CompraService = require('../services/compraRepository');

module.exports = {
  async index(req, res) {
    const compra = await CompraService.getAll();
    res.json(compra);
  },

  async show(req, res) {
    const { id } = req.params;
    const compra = await CompraService.getById(id);
    if (!compra) return res.status(404).json({ error: 'Compra não encontrada' });
    res.json(compra);
  },

  async store(req, res) {
    const nova = await CompraService.create(req.body);
    res.status(201).json(nova);
  },

  async update(req, res) {
    const { id } = req.params;
    const atualizada = await CompraService.update(id, req.body);
    res.json(atualizada);
  },

  async delete(req, res) {
    const { id } = req.params;
    await CompraService.delete(id);
    res.status(204).send();
  }
};