-- Criação da tabela freguês
CREATE TABLE IF NOT EXISTS fregues (
    id SERIAL PRIMARY KEY, -- chave de identificação
    nome VARCHAR(100) NOT NULL, -- not null impede que fique sem resposta
    email VARCHAR(100) NOT NULL UNIQUE, -- varchar permite escrita com palavras e números e o número delimita os caracteres máximos
    senha VARCHAR(100) NOT NULL,
    endereco VARCHAR(500) NOT NULL,
    telefone VARCHAR(13) NOT NULL
);

-- Criação da tabela dono_banca
CREATE TABLE IF NOT EXISTS dono_banca (
    id SERIAL PRIMARY KEY, -- chave de identificação
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    telefone VARCHAR(13) NOT NULL
);

-- Criação da tabela compra
CREATE TABLE IF NOT EXISTS compra (
    id SERIAL PRIMARY KEY NOT NULL,
    data_pedido DATE NOT NULL,
    data_entrega DATE NOT NULL,
    FOREIGN KEY id_fregues INT REFERENCES fregues(id) NOT NULL, -- chave estrangeira, que permite relação com a tabela de origem
    FOREIGN KEY id_dono INT REFERENCES dono_banca(id) NOT NULL,
    valor_estimdo_total NUMERIC(10,2) NOT NULL, -- definição de inserção numérica som 10 dígitos máximos e 2 casas decimais (dinheiro)
    valor_final_total NUMERIC(10,2) NOT NULL,
    aprovado_por_dono VARCHAR (20) NOT NULL
);

-- Criação da tabela item_compra
CREATE TABLE IF NOT EXISTS item_compra (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY id_compra INT REFERENCES compra(id),
    nome_produto VARCHAR(100) NOT NULL,
    quantidade NUMERIC NOT NULL,
    preco_estimado_unitario NUMERIC(10,2) NOT NULL,
    subtotal_estimado NUMERIC(10,2) NOT NULL
);