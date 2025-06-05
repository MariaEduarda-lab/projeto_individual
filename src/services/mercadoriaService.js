const MercadoriaRepository = require('../repositories/mercadoriaRepository');
const MercadoriaModel = require('../models/mercadoriaModel');

class MercadoriaService {
  async getAll() {
    return await MercadoriaRepository.findAll();
  }

  async getById(id) {
    return await MercadoriaRepository.findById(id);
  }

  async create(mercadoria) {
    const { error } = MercadoriaModel.schema.validate(mercadoria);
    if (error) throw new Error(error.details[0].message);

    return await MercadoriaRepository.create(mercadoria);
  }

  async update(id, mercadoria) {
    const { error } = MercadoriaModel.schema.validate(mercadoria);
    if (error) throw new Error(error.details[0].message);

    return await MercadoriaRepository.update(id, mercadoria);
  }

  async delete(id) {
    return await MercadoriaRepository.delete(id);
  }
}

module.exports = new MercadoriaService();