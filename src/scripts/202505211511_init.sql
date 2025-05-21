CREATE TABLE IF NOT EXISTS compra (
    id SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL,
    data_entrega DATE NOT NULL,
    valor_estimdo_total NUMERIC(10,2) NOT NULL, -- definição de inserção numérica som 10 dígitos máximos e 2 casas decimais (dinheiro)
    valor_final_total NUMERIC(10,2) NOT NULL,
    aprovado_por_dono VARCHAR (20) NOT NULL,
    fregues_id INT,
    FOREIGN KEY (fregues_id) REFERENCES fregues(id) -- chave estrangeira com relação na sua tabela de origem
);