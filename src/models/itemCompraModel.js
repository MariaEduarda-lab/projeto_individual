const Joi = require('joi');

class ItemCompraModel {
    static get schema() {
        return Joi.object({
            nome_produto: Joi.string().max(100).required(),
            quantidade: Joi.number().positive().required(),
            preco_estimado_unitario: Joi.number().precision(2).min(0).required(),
            subtotal_estimado: Joi.number().precision(2).min(0).required(),
            compra_id: Joi.number().integer().optional(),
            fregues_id: Joi.number().integer().optional(),
            dono_banca_id: Joi.number().integer().optional()
        });
    }
}

module.exports = ItemCompraModel;
