const db = require('../config/db');

class Compra {
  static async getAll() {
    const result = await db.query('SELECT * FROM compra');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM compra WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO compra (data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [data.data_pedido, data.data_entrega, data.valor_estimado_total, data.valor_final_total, data.telefone, data.dono_banca_id]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE compra SET data_pedido = $1, data_entrega = $2, valor_estimado_total = $3, valor_final_total = $4, aprovado_por_dono = $5, fregues_id = $6, dono_banca_id = $7, WHERE id = $8 RETURNING *',
      [data.data_pedido, data.data_entrega, data.valor_estimado_total, data.valor_final_total, data.telefone, data.dono_banca_id, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM compra WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Compra;