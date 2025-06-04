const db = require('../config/db');
const Compra = require('../models/compraModel');

class CompraRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM compra');
    return result.rows.map(row => new Compra(row));
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM compra WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return new Compra(result.rows[0]);
  }

  async create(compra) {
    const { data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id } = compra;
    const result = await db.query(
      'INSERT INTO compra (data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id]
    );
    return new Compra(result.rows[0]);
  }

  async update(id, compra) {
    const { data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id } = compra;
    const result = await db.query(
      'UPDATE compra SET data_pedido = $1, data_entrega = $2, valor_estimado_total = $3, valor_final_total = $4, aprovado_por_dono = $5, fregues_id = $6, dono_banca_id = $7 WHERE id = $8 RETURNING *',
      [data_pedido, data_entrega, valor_estimado_total, valor_final_total, aprovado_por_dono, fregues_id, dono_banca_id, id]
    );
    return new Compra(result.rows[0]);
  }

  async delete(id) {
    await db.query('DELETE FROM compra WHERE id = $1', [id]);
  }
}

module.exports = new CompraRepository();