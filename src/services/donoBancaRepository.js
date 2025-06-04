const DonoBancaRepository = require('../repositories/donoBancaRepository');

class DonoBancaService {
  getAll() {
    return DonoBancaRepository.findAll();
  }

  getById(id) {
    return DonoBancaRepository.findById(id);
  }

  create(dono_banca) {
    return DonoBancaRepository.create(dono_banca);
  }

  update(id, dono_banca) {
    return DonoBancaRepository.update(id, dono_banca);
  }

  delete(id) {
    return DonoBancaRepository.delete(id);
  }
}

module.exports = new DonoBancaService();
