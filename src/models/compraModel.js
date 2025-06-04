class Compra {
  constructor({ id = null, data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id }) {
    this.id = id;
    this.data_pedido = data_pedido;
    this.data_entrega = data_entrega;
    this.valor_estimado_total = valor_estimado_total;
    this.valor_final_total = valor_final_total;
    this.aprovado_por_dono = aprovado_por_dono;
    this.fregues_id = fregues_id;
    this.dono_banca_id = dono_banca_id;
  }
}

module.exports = Compra;