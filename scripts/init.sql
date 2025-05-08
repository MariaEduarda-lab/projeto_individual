-- Criação da tabela cliente
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(13) NOT NULL,
  email VARCHAR(100) NOT NULL
);-- Criação da tabela cliente
CREATE TABLE IF NOT EXISTS cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(13) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da tabela mesa
CREATE TABLE IF NOT EXISTS mesa (
    id SERIAL PRIMARY KEY,
    id_mesa VARCHAR(100) NOT NULL UNIQUE,
    numero_mesa VARCHAR(4) NOT NULL,
    capacidade INTEGER NOT NULL
);

-- Criação da tabela reserva
CREATE TABLE IF NOT EXISTS reserva (
    id SERIAL PRIMARY KEY,
    reserva VARCHAR(1000) NOT NULL,
    data DATE NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    numero_pessoas INTEGER NOT NULL,
    status VARCHAR(10) NOT NULL,
    id_cliente INTEGER NOT NULL,
    id_mesa INTEGER NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id) ON DELETE CASCADE,
    FOREIGN KEY (id_mesa) REFERENCES mesa(id) ON DELETE CASCADE
);