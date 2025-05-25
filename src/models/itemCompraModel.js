const db = require('../config/db');

class ItemCompra {
  static async getAll() {
    const result = await db.query('SELECT * FROM item_compra');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM item_compra WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO item_compra (nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, donobanca_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [data.nome_produto, data.quantidade, data.preco_estimado_unitario, data.subtotal_estimado, data.compra_id, data.fregues_id, data.donobanca_id]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE item_compra SET nome_produto = $1, quantidade = $2, preco_estimado_unitario = $3, subtotal_estimado = $4, compra_id = $5, fregues_id = $6, donobanca_id = $7, WHERE id = $8 RETURNING *',
      [data.data_pedido, data.data_entrega, data.valor_estimado_total, data.valor_final_total, data.telefone, data.dono_banca_id, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM item_compra WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = ItemCompra;