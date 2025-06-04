const Joi = require('joi');

class CompraModel {
    static get schema() {
        return Joi.object({
            data_pedido: Joi.date().required(),
            data_entrega: Joi.date().required(),
            valor_estimado_total: Joi.number().precision(2).positive().required(),
            valor_final_total: Joi.number().precision(2).positive().optional(),
            status: Joi.boolean().required(),
            fregues_id: Joi.number().integer().required(),
            dono_banca_id: Joi.number().integer().required()
        });
    }
}

module.exports = CompraModel;
