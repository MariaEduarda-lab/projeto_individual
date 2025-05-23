CREATE TABLE IF NOT EXISTS item_compra (
    id SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade NUMERIC NOT NULL,
    preco_estimado_unitario NUMERIC(10,2) NOT NULL,
    subtotal_estimado NUMERIC(10,2) NOT NULL,
    compra_id INT,
    fregues_id INT,
    dono_banca_id INT,
    FOREIGN KEY (compra_id) REFERENCES compra(id),
    FOREIGN KEY (fregues_id) REFERENCES fregues(id),
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);