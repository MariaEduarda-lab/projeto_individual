-- Garante que a tabela esteja vazia antes de inserir
DELETE FROM item_compra;
DELETE FROM compra;
DELETE FROM mercadoria;
DELETE FROM fregues;
DELETE FROM dono_banca;

-- Insere o único dono da banca
INSERT INTO dono_banca (id, nome, email, senha, telefone)
VALUES (1, 'Luciene', 'ludafeira@email.com', 'senha123', '11987654321')
ON CONFLICT (id) DO NOTHING;

-- Insere algumas mercadorias vinculadas ao dono
INSERT INTO mercadoria (nome, preco_por_kg, dono_banca_id)
VALUES
  ('Tomate', 5.99, 1),
  ('Cebola', 3.49, 1),
  ('Batata', 4.29, 1);

-- Insere alguns fregueses vinculados ao dono
INSERT INTO fregues (nome, email, senha, endereco, telefone, dono_banca_id)
VALUES
  ('Carlos Silva', 'carlos@email.com', 'senha123', 'Rua A, 123', '11912345678', 1),
  ('Ana Maria', 'ana@email.com', 'senha123', 'Rua B, 456', '11987654321', 1);

-- Insere uma compra
INSERT INTO compra (data_pedido, data_entrega, valor_estimado_total, valor_final_total, status_pedido, fregues_id, dono_banca_id)
VALUES
  ('2025-04-01', '2025-04-03', 28.47, 29.00, TRUE, 1, 1);

-- Insere itens dessa compra
INSERT INTO item_compra (quantidade, subtotal_estimado, subtotal_final, mercadoria_id, compra_id)
VALUES
  (2.5, 14.98, 15.00, 1, 1),
  (3.0, 10.47, 10.50, 2, 1),
  (0.5, 2.99, 3.50, 3, 1);