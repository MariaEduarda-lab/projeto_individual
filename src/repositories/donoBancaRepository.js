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

    async update(id, { nome, email, telefone, senha }) {
        let query, values;
        if (senha) {
            query = 'UPDATE dono_banca SET nome = $1, email = $2, telefone = $3, senha = $4 WHERE id = $5';
            values = [nome, email, telefone, senha, id];
        } else {
            query = 'UPDATE dono_banca SET nome = $1, email = $2, telefone = $3 WHERE id = $4';
            values = [nome, email, telefone, id];
        }
        await db.query(query, values);
    }
}

module.exports = new DonoBancaRepository();