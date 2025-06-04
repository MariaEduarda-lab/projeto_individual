const FreguesService = require('../services/freguesService');

module.exports = {
  async index(req, res) {
    const fregues = await FreguesService.getAll();
    res.json(fregues);
  },

  async show(req, res) {
    const { id } = req.params;
    const fregues = await FreguesService.getById(id);
    if (!fregues) return res.status(404).json({ error: 'Fregues não encontrada' });
    res.json(fregues);
  },

  async store(req, res) {
    const nova = await FreguesService.create(req.body);
    res.status(201).json(nova);
  },

  async update(req, res) {
    const { id } = req.params;
    const atualizada = await FreguesService.update(id, req.body);
    res.json(atualizada);
  },

  async delete(req, res) {
    const { id } = req.params;
    await FreguesService.delete(id);
    res.status(204).send();
  }
};