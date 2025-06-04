const ItemCompraService = require('../services/itemCompraService');

module.exports = {
  async index(req, res) {
    const item_compra = await ItemCompraService.getAll();
    res.json(item_compra);
  },

  async show(req, res) {
    const { id } = req.params;
    const item_compra = await ItemCompraService.getById(id);
    if (!item_compra) return res.status(404).json({ error: 'ItemCompra não encontrada' });
    res.json(item_compra);
  },

  async store(req, res) {
    const nova = await ItemCompraService.create(req.body);
    res.status(201).json(nova);
  },

  async update(req, res) {
    const { id } = req.params;
    const atualizada = await ItemCompraService.update(id, req.body);
    res.json(atualizada);
  },

  async delete(req, res) {
    const { id } = req.params;
    await ItemCompraService.delete(id);
    res.status(204).send();
  }
};