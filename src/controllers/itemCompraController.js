// controllers/userController.js

const itemCompraController = require('../models/itemCompraModel.js');

const getAllitensCompra = async (req, res) => {
  try {
    const itensCompra = await itemCompraController.getAll();
    res.status(200).json(itensCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemCompraById = async (req, res) => {
  try {
    const itemCompra = await itemCompraController.getById(req.params.id);
    if (itemCompra) {
      res.status(200).json(itemCompra);
    } else {
      res.status(404).json({ error: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const data = req.body;
    const newItem = await itemCompraController.create(data);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const data = req.body;
    const updatedItem = await itemCompraController.update(req.params.id, data);
    if (updatedItem) {
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ error: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const deletedItem = await itemCompraController.delete(req.params.id);
    if (deletedItem) {
      res.status(200).json(deletedItem);
    } else {
      res.status(404).json({ error: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllitensCompra,
  getItemCompraById,
  createItem,
  updateItem,
  deleteItem
};