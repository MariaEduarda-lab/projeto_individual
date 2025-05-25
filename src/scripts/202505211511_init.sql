CREATE TABLE IF NOT EXISTS compra (
    id SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL,
    data_entrega DATE NOT NULL,
    valor_estimado_total NUMERIC(10,2) NOT NULL, 
    valor_final_total NUMERIC(10,2) NOT NULL,
    aprovado_por_dono VARCHAR (20) NOT NULL,
    fregues_id INT,
    dono_banca_id INT,
    FOREIGN KEY (fregues_id) REFERENCES fregues(id),
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);