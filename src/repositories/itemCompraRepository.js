const db = require('../config/db');
const ItemCompra = require('../models/itemCompraModel');

class ItemCompraRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM item_compra');
    return result.rows.map(row => new ItemCompra(row));
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM item_compra WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return new ItemCompra(result.rows[0]);
  }

  async create(item_compra) {
    const { nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id } = item_compra;
    const result = await db.query(
      'INSERT INTO item_compra (nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id]
    );
    return new ItemCompra(result.rows[0]);
  }

  async update(id, item_compra) {
    const {nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id} = item_compra;
    const result = await db.query(
      'UPDATE item_compra SET nome_produto = $1, quantidade = $2, preco_estimado_unitario = $3, subtotal_estimado = $4, compra_id = $5, fregues_id = $6, dono_banca_id = $7 WHERE id = $8 RETURNING *',
      [ nome_produto, quantidade, preco_estimado_unitario, subtotal_estimado, compra_id, fregues_id, dono_banca_id, id ]
    );
    return new ItemCompra(result.rows[0]);
  }

  async delete(id) {
    await db.query('DELETE FROM item_compra WHERE id = $1', [id]);
  }
}

module.exports = new ItemCompraRepository();