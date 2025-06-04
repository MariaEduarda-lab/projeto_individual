const Joi = require('joi');

class ItemCompraModel {
  static get schema() {
    return Joi.object({
      quantidade: Joi.number().positive().required(),
      subtotal_final: Joi.number().precision(2).positive().optional(),
      mercadoria_id: Joi.number().integer().required(),
      compra_id: Joi.number().integer().required()
    });
  }
}

module.exports = ItemCompraModel;
