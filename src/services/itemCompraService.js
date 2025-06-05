const ItemCompraRepository = require('../repositories/itemCompraRepository');
const ItemCompraModel = require('../models/itemCompraModel');

class ItemCompraService {
  async getAll() {
    return await ItemCompraRepository.findAll();
  }

  async getById(id) {
    return await ItemCompraRepository.findById(id);
  }

  async create(item_compra) {
    const {error} = ItemCompraModel.schema.validate(item_compra);
    if (error) throw new Error(error.details[0].message);

    return await ItemCompraRepository.create(item_compra);
  }

  async update(id, item_compra) {
    const {error} = ItemCompraModel.schema.validate(item_compra);
    if (error) throw new Error(error.details[0].message);

    return await ItemCompraRepository.update(id, item_compra);
  }

  async delete(id) {
    return ItemCompraRepository.delete(id);
  }
}

module.exports = new ItemCompraService();
