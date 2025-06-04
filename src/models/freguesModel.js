const Joi = require('joi');

class FreguesModel {
    static get schema() {
        return Joi.object({
            nome: Joi.string().max(100).required(),
            email: Joi.string().email().max(100).required(),
            senha: Joi.string().min(6).max(100).required(),
            endereco: Joi.string().max(500).required(),
            telefone: Joi.string().max(20).required(),
            dono_banca_id: Joi.number().integer().optional() // pode ser null
        });
    }
}

module.exports = FreguesModel;
