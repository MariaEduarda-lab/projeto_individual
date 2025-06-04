const CompraRepository = require('../repositories/compraRepository');

class CompraService {
  getAll() {
    return CompraRepository.findAll();
  }

  getById(id) {
    return CompraRepository.findById(id);
  }

  create(compra) {
    return CompraRepository.create(compra);
  }

  update(id, compra) {
    return CompraRepository.update(id, compra);
  }

  delete(id) {
    return CompraRepository.delete(id);
  }
}

module.exports = new CompraService();
