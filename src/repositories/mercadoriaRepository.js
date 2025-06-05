const db = require('../config/db');

class MercadoriaRepository {
  async findAll() {
    const result = await db.query('SELECT id, nome, preco_por_kg, dono_banca_id FROM mercadoria');
    return result.rows; 
  }

  async findById(id) {
    const result = await db.query('SELECT id, nome, preco_por_kg, dono_banca_id FROM mercadoria WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return result.rows[0]; 
  }

  async create(mercadoria) {
    const { nome, preco_por_kg, dono_banca_id } = mercadoria;
    const result = await db.query(
      'INSERT INTO mercadoria (nome, preco_por_kg, dono_banca_id) VALUES ($1, $2, $3) RETURNING id, nome, preco_por_kg, dono_banca_id',
      [nome, preco_por_kg, dono_banca_id]
    );
    return result.rows[0]; 
  }

  async update(id, mercadoria) {
    const { nome, preco_por_kg, dono_banca_id } = mercadoria;
    const result = await db.query(
      'UPDATE mercadoria SET nome = $1, preco_por_kg = $2, dono_banca_id = $3 WHERE id = $4 RETURNING id, nome, preco_por_kg, dono_banca_id',
      [nome, preco_por_kg, dono_banca_id, id]
    );
    return result.rows[0]; 
  }

  async delete(id) {
    await db.query('DELETE FROM mercadoria WHERE id = $1', [id]);
  }
}

module.exports = new MercadoriaRepository();