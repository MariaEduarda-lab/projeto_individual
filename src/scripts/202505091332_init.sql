CREATE TABLE IF NOT EXISTS dono_banca (
    id SERIAL PRIMARY KEY, -- chave de identificação
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);
