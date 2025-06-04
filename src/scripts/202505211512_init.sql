CREATE TABLE IF NOT EXISTS compra (
    id SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL DEFAULT CURRENT_DATE,
    data_entrega DATE, 
    valor_estimado_total NUMERIC(10,2) NOT NULL, 
    valor_final_total NUMERIC(10,2), 
    status BOOLEAN NOT NULL DEFAULT FALSE, 
    fregues_id INT NOT NULL,
    dono_banca_id INT NOT NULL,
    FOREIGN KEY (fregues_id) REFERENCES fregues(id),
    FOREIGN KEY (dono_banca_id) REFERENCES dono_banca(id)
);
