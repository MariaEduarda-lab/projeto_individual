const DonoBancaService = require('../services/donoBancaRepository');

module.exports = {
  async index(req, res) {
    const dono_banca = await DonoBancaService.getAll();
    res.json(dono_banca);
  },

  async show(req, res) {
    const { id } = req.params;
    const dono_banca = await DonoBancaService.getById(id);
    if (!dono_banca) return res.status(404).json({ error: 'DonoBanca não encontrado' });
    res.json(dono_banca);
  },

  async store(req, res) {
    const nova = await DonoBancaService.create(req.body);
    res.status(201).json(nova);
  },

  async update(req, res) {
    const { id } = req.params;
    const atualizada = await DonoBancaService.update(id, req.body);
    res.json(atualizada);
  },

  async delete(req, res) {
    const { id } = req.params;
    await DonoBancaService.delete(id);
    res.status(204).send();
  }
};