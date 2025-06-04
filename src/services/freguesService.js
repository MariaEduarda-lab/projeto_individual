const FreguesRepository = require('../repositories/freguesRepository');

class FreguesService {
  getAll() {
    return FreguesRepository.findAll();
  }

  getById(id) {
    return FreguesRepository.findById(id);
  }

  create(fregues) {
    return FreguesRepository.create(fregues);
  }

  update(id, fregues) {
    return FreguesRepository.update(id, fregues);
  }

  delete(id) {
    return FreguesRepository.delete(id);
  }
}

module.exports = new FreguesService();
