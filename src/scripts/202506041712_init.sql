CREATE TABLE IF NOT EXISTS item_compra (
    id SERIAL PRIMARY KEY,
    quantidade NUMERIC NOT NULL, 
    subtotal_estimado NUMERIC(10,2) NOT NULL, 
    valor_final_unitario NUMERIC(10,2), 
    subtotal_final NUMERIC(10,2),
    mercadoria_id INT NOT NULL,
    compra_id INT NOT NULL,
    FOREIGN KEY (mercadoria_id) REFERENCES mercadoria(id),
    FOREIGN KEY (compra_id) REFERENCES compra(id)
);