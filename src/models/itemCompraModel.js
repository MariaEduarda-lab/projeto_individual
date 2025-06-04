class ItemCompra {
  constructor({ id = null, nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id }) {
    this.id = id;
    this.nome_produto = nome_produto;
    this.quantidade = quantidade;
    this.preco_estimado_unitario = preco_estimado_unitario;
    this.subtotal_estimado = subtotal_estimado;
    this.compra_id = compra_id;
    this.fregues_id = fregues_id;
    this.dono_banca_id = dono_banca_id;
  }
}

module.exports = ItemCompra;