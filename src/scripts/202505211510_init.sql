CREATE TABLE IF NOT EXISTS fregues (
    id SERIAL PRIMARY KEY, -- chave de identificação
    nome VARCHAR(100) NOT NULL, -- not null impede que fique sem resposta
    email VARCHAR(100) NOT NULL UNIQUE, -- varchar permite escrita com palavras e números e o número delimita os caracteres máximos
    senha VARCHAR(100) NOT NULL,
    endereco VARCHAR(500) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    dono_banca_id INT,
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);