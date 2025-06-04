const Joi = require('joi');

class CompraModel {
    static get schema() {
        return Joi.object({
            data_pedido: Joi.date().required(),
            data_entrega: Joi.date().required(),
            valor_estimado_total: Joi.number().precision(2).min(0).required(),
            valor_final_total: Joi.number().precision(2).min(0).required(),
            aprovado_por_dono: Joi.string().max(20).required(),
            fregues_id: Joi.number().integer().optional(),
            dono_banca_id: Joi.number().integer().optional()
        });
    }
}

module.exports = CompraModel;
