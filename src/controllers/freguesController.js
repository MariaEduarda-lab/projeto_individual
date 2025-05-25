// controllers/userController.js

const freguesModel = require('../models/freguesModel.js');

const getAllFregueses = async (req, res) => {
  try {
    const fregueses = await freguesModel.getAll();
    res.status(200).json(fregueses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFreguesById = async (req, res) => {
  try {
    const fregues = await freguesModel.getById(req.params.id);
    if (fregues) {
      res.status(200).json(fregues);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFregues = async (req, res) => {
  try {
    const data = req.body;
    const newFregues = await freguesModel.create(data);
    res.status(201).json(newFregues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFregues = async (req, res) => {
  try {
    const data = req.body;
    const updatedFregues = await freguesModel.update(req.params.id, data);
    if (updatedFregues) {
      res.status(200).json(updatedFregues);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFregues = async (req, res) => {
  try {
    const deletedFregues = await freguesModel.delete(req.params.id);
    if (deletedFregues) {
      res.status(200).json(deletedFregues);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFregueses,
  getFreguesById,
  createFregues,
  updateFregues,
  deleteFregues
};