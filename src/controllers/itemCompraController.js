const ItemCompraService = require('../services/itemCompraService');

module.exports = {
  async index(req, res) {
    const item_compra = await ItemCompraService.getAll();
    res.render('itemCompra', { item_compra });
  },

  async show(req, res) {
    const { id } = req.params;
    const item_compra = await ItemCompraService.getById(id);
    if (!item_compra) return res.status(404).render('404', { error: 'ItemCompra não encontrada' });
    res.render('itemCompra/show', { item_compra });
  },

  async store(req, res) {
    const nova = await ItemCompraService.create(req.body);
    res.redirect('/item-compra'); 
  },

  async update(req, res) {
    const { id } = req.params;
    await ItemCompraService.update(id, req.body);
    res.redirect(`/item-compra/${id}`); 
  },

  async delete(req, res) {
    const { id } = req.params;
    await ItemCompraService.delete(id);
    res.redirect('/item-compra'); 
  }
};