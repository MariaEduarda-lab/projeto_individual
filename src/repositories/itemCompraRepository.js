const db = require('../config/db');
const ItemCompra = require('../models/itemCompraModel');

class ItemCompraRepository {
  async findAll() {
    const result = await db.query('SELECT id, quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id FROM item_compra');
    return result.rows.map(row => new ItemCompra(row));
  }

  async findById(id) {
    const result = await db.query('SELECT id, quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id FROM item_compra WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return new ItemCompra(result.rows[0]);
  }

  async create(item_compra) {
    const { quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id } = item_compra;
    const result = await db.query(
      'INSERT INTO item_compra (quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id) VALUES ($1, $2, $3, $4, $5,) RETURNING id, quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id',
      [quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id]
    );
    return new ItemCompra(result.rows[0]);
  }

  async update(id, item_compra) {
    const {quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id} = item_compra;
    const result = await db.query(
      'UPDATE item_compra SET quantidade = $1, subtotal_estimado = $2, subtotal_final = $3, mercadoria_id = $4, compra_id = $5 WHERE id = $6 RETURNING id, quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id',
      [ quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id, id ]
    );
    return new ItemCompra(result.rows[0]);
  }

  async delete(id) {
    await db.query('DELETE FROM item_compra WHERE id = $1', [id]);
  }
}

module.exports = new ItemCompraRepository();