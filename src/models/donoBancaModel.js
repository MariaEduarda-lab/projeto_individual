const db = require('../config/db');

class DonoBanca {
  static async getAll() {
    const result = await db.query('SELECT * FROM dono_banca');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM dono_banca WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO dono_banca (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.email, data.senha, data.telefone]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE dono_banca SET nome = $1, email = $2, senha = $3, telefone = $4 WHERE id = $5 RETURNING *',
      [data.nome, data.email, data.senha, data.telefone, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM dono_banca WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = DonoBanca;