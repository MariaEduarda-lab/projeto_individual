CREATE TABLE IF NOT EXISTS mercadoria (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco_por_kg NUMERIC(10,2) NOT NULL,
    dono_banca_id INT NOT NULL,
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);