const db = require('../config/db');

class DonoBancaRepository {
    async findAll() {
        const result = await db.query('SELECT id, nome, email, telefone FROM dono_banca');
        return result.rows;
    }

    async findById(id) {
        const result = await db.query('SELECT id, nome, email, telefone FROM dono_banca WHERE id = $1', [id]);
        return result.rows[0];
    }

    async create(donoData) {
        const { nome, email, senha, telefone } = donoData;
        const result = await db.query(
            'INSERT INTO dono_banca (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING id, nome, email, telefone',
            [nome, email, senha, telefone]
        );
        return result.rows[0];
    }

    async update(id, donoData) {
        const { nome, email, telefone } = donoData;
        const result = await db.query(
            'UPDATE dono_banca SET nome = $1, email = $2, telefone = $3 WHERE id = $4 RETURNING id, nome, email, telefone',
            [nome, email, telefone, id]
        );
        return result.rows[0];
    }
}

module.exports = new DonoBancaRepository();