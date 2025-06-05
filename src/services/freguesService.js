const FreguesRepository = require('../repositories/freguesRepository');
const FreguesModel = require('../models/freguesModel'); 

class FreguesService {
    async getAll() {
        return await FreguesRepository.findAll();
    }

    async getById(id) {
        return await FreguesRepository.findById(id);
    }

    async create(fregues) {  
        const { error } = FreguesModel.schema.validate(fregues);
        if (error) throw new Error(error.details[0].message);

        return await FreguesRepository.create(fregues);
    }

    async update(id, fregues) {  
        const { error } = FreguesModel.schema.validate(fregues);
        if (error) throw new Error(error.details[0].message);

        return await FreguesRepository.update(id, fregues);
    }

    async delete(id) {
        return await FreguesRepository.delete(id);
    }
}

module.exports = new FreguesService();