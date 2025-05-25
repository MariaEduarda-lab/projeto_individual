const compraModel = require('../models/compraModel.js');

const getAllCompras = async (req, res) => {
  try {
    const compras = await compraModel.getAll();
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompraById = async (req, res) => {
  try {
    const compra = await compraModel.getById(req.params.id);
    if (compra) {
      res.status(200).json(compra);
    } else {
      res.status(404).json({ error: 'Compra não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCompra = async (req, res) => {
  try {
    const data = req.body;
    const newCompra = await compraModel.create(data);
    res.status(201).json(newCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCompra = async (req, res) => {
  try {
    const data = req.body;
    const updatedCompra = await compraModel.update(req.params.id, data);
    if (updatedCompra) {
      res.status(200).json(updatedCompra);
    } else {
      res.status(404).json({ error: 'Compra não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompra = async (req, res) => {
  try {
    const deletedCompra = await compraModel.delete(req.params.id);
    if (deletedCompra) {
      res.status(200).json(deletedCompra);
    } else {
      res.status(404).json({ error: 'Compra não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCompras,
  getCompraById,
  createCompra,
  updateCompra,
  deleteCompra
};