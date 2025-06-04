const Joi = require('joi');

class MercadoriaModel {
    static get schema() {
        return Joi.object({
            nome: Joi.string().max(100).required(),
            preco_por_kg: Joi.number().precision(2).positive().required(),
            dono_banca_id: Joi.number().integer().required()
        });
    }
}

module.exports = MercadoriaModel;
