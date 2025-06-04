const db = require('../config/db');
const DonoBanca = require('../models/donoBancaModel');

class DonoBancaRepository {
  async findAll() {
    const result = await db.query('SELECT id, nome, email, senha, telefone FROM dono_banca');
    return result.rows.map(row => new DonoBanca(row));
  }

  async findById(id) {
    const result = await db.query('SELECT id, nome, email, senha, telefone FROM dono_banca WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return new DonoBanca(result.rows[0]);
  }

  async create(dono_banca) {
    const { nome, email, senha, telefone } = dono_banca;
    const result = await db.query(
      'INSERT INTO dono_banca (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING id, nome, email, senha, telefone',
      [nome, email, senha, telefone]
    );
    return new DonoBanca(result.rows[0]);
  }

  async update(id, dono_banca) {
    const { nome, email, senha, telefone } = dono_banca;
    const result = await db.query(
      'UPDATE dono_banca SET nome = $1, email = $2, senha = $3, telefone = $4 WHERE id = $5 RETURNING id, nome, email, senha, telefone',
      [ nome, email, senha, telefone, id]
    );
    return new DonoBanca(result.rows[0]);
  }
}

module.exports = new DonoBancaRepository();