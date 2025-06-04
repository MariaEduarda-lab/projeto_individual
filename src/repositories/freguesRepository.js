const db = require('../config/db');
const Fregues = require('../models/freguesModel');

class FreguesRepository {
  async findAll() {
    const result = await db.query('SELECT id, nome, email, senha, endereco, telefone, dono_banca_id FROM fregues');
    return result.rows.map(row => new Fregues(row));
  }

  async findById(id) {
    const result = await db.query('SELECT id, nome, email, senha, endereco, telefone, dono_banca_id FROM fregues WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return new Fregues(result.rows[0]);
  }

  async create(fregues) {
    const { nome, email, senha, endereco, telefone, dono_banca_id } = fregues;
    const result = await db.query(
      'INSERT INTO fregues (nome, email, senha, endereco, telefone, dono_banca_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, nome, email, senha, endereco, telefone, dono_banca_id',
      [nome, email, senha, endereco, telefone, dono_banca_id]
    );
    return new Fregues(result.rows[0]);
  }

  async update(id, fregues) {
    const { nome, email, senha, endereco, telefone, dono_banca_id} = fregues;
    const result = await db.query(
      'UPDATE fregues SET nome = $1, email = $2, senha = $3, endereco = $4, telefone = $5, dono_banca_id = $6 WHERE id = $7 RETURNING id, nome, email, senha, endereco, telefone, dono_banca_id',
      [ nome, email, senha, endereco, telefone, dono_banca_id, id ]
    );
    return new Fregues(result.rows[0]);
  }

  async delete(id) {
    await db.query('DELETE FROM fregues WHERE id = $1', [id]);
  }
}

module.exports = new FreguesRepository();