const CompraRepository = require('../repositories/compraRepository');
const CompraModel = require('../models/compraModel');

class CompraService {
    async getAll() {
        return await CompraRepository.findAll();
    }

    async getById(id) {
        return await CompraRepository.findById(id);
    }

    async create(compra) {  
        const { error } = CompraModel.schema.validate(compra);
        if (error) throw new Error(error.details[0].message);

        return await CompraRepository.create(compra);
    }

    async update(id, compra) {  
        const { error } = CompraModel.schema.validate(compra);
        if (error) throw new Error(error.details[0].message);

        return await CompraRepository.update(id, compra);
    }

    async delete(id) {
        return await CompraRepository.delete(id);
    }
}

module.exports = new CompraService();