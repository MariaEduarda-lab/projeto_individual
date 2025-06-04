const Joi = require('joi');

class DonoBancaModel {
    static get schema() {
        return Joi.object({
            nome: Joi.string().max(100).required(),
            email: Joi.string().email().max(100).required(),
            senha: Joi.string().min(6).max(100).required(),
            telefone: Joi.string().max(20).required()
        });
    }
}

module.exports = DonoBancaModel;
