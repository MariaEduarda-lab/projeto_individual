CREATE TABLE IF NOT EXISTS fregues (
    id SERIAL PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    senha VARCHAR(100) NOT NULL,
    endereco VARCHAR(500) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    dono_banca_id INT,
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);