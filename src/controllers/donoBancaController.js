const donoBancaModel = require('../models/donoBancaModel.js');

const getAllDonos = async (req, res) => {
  try {
    const donos = await donoBancaModel.getAll();
    res.status(200).json(donos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDonoById = async (req, res) => {
  try {
    const dono = await donoBancaModel.getById(req.params.id);
    if (dono) {
      res.status(200).json(dono);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDono = async (req, res) => {
  try {
    const data = req.body;
    const newDono = await donoBancaModel.create(data);
    res.status(201).json(newDono);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDono = async (req, res) => {
  try {
    const data = req.body;
    const updatedDono = await donoBancaModel.update(req.params.id, data);
    if (updatedDono) {
      res.status(200).json(updatedDono);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDono = async (req, res) => {
  try {
    const deletedDono = await donoBancaModel.delete(req.params.id);
    if (deletedDono) {
      res.status(200).json(deletedDono);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDonos,
  getDonoById,
  createDono,
  updateDono,
  deleteDono
};