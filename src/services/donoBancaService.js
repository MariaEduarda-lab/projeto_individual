const DonoBancaRepository = require('../repositories/donoBancaRepository');
const DonoBancaModel = require('../models/donoBancaModel');

class DonoBancaService {
    async getAll() {
        return await DonoBancaRepository.findAll();
    }

    async getById(id) {
        return await DonoBancaRepository.findById(id);
    }

    async create(dono_banca) {
        const { error } = DonoBancaModel.schema.validate(dono_banca);
        if (error) throw new Error(error.details[0].message);

        return await DonoBancaRepository.create(dono_banca);
    }

    async update(id, dono_banca) {
        const { error } = DonoBancaModel.schema.validate(dono_banca);
        if (error) throw new Error(error.details[0].message);

        return await DonoBancaRepository.update(id, dono_banca);
    }
}

module.exports = new DonoBancaService();