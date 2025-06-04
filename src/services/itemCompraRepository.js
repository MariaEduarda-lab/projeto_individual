const ItemCompraRepository = require('../repositories/itemCompraRepository');

class ItemCompraService {
  getAll() {
    return ItemCompraRepository.findAll();
  }

  getById(id) {
    return ItemCompraRepository.findById(id);
  }

  create(item_compra) {
    return ItemCompraRepository.create(item_compra);
  }

  update(id, item_compra) {
    return ItemCompraRepository.update(id, item_compra);
  }

  delete(id) {
    return ItemCompraRepository.delete(id);
  }
}

module.exports = new ItemCompraService();
