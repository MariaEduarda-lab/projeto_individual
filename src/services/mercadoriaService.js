const MercadoriaRepository = require('../repositories/mercadoriaRepository');

class MercadoriaService {
  getAll() {
    return MercadoriaRepository.findAll();
  }

  getById(id) {
    return MercadoriaRepository.findById(id);
  }

  create(dono_banca) {
    return MercadoriaRepository.create(dono_banca);
  }

  update(id, dono_banca) {
    return MercadoriaRepository.update(id, dono_banca);
  }

   delete(id) {
      return MercadoriaRepository.delete(id);
    }
}

module.exports = new MercadoriaService();
