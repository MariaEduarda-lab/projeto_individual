const db = require('../config/db');

class Fregues {
  static async getAll() {
    const result = await db.query('SELECT * FROM fregues');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM fregues WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO fregues (nome, email, senha, endereco telefone, dono_banca_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [data.nome, data.email, data.senha, data.endereco, data.telefone, data.dono_banca_id]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE fregues SET nome = $1, email = $2, senha = $3, endereco = $4, telefone = $5, dono_banca_id = $6, WHERE id = $7 RETURNING *',
      [data.nome, data.email, data.senha, data.endereco, data.telefone, data.dono_banca_id, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM fregues WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Fregues;