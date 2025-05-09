# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Kombinado

#### Maria Eduarda Barbosa Oliveira

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)


---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 1)

A modelagem do banco de dados existe para explicar as regras de negócio, ou seja, para expicar as relações que devem existir dentro da modelagem do banco de dados. É possível ter uma perspectiva visual do banco de dados, crinado uma consistência maior para criação do banco em questão, e não apenas isso, mas também ter de maneira organizada o projeto em questão, a partir dos relacionamentos existentes, com alguns atributos e campos-chave.

<div align="center">
   <sub>Imagem 1: Diagrama Banco de Dados</sub><br>
   <img src="..\assets\tabelaRelacional_bancaLu.png" border="0" width=300% height=300% 
   alt="Título"><br>
   <sup>Fonte: Maria Eduarda, (Autoral, utilizando dbdiagram.io)</sup>
 </div>

No diagrama apresentado acima, é possível entender as principais regras de negócio da aplicação web, cujo objetivo é permitir a encomenda de verduras. O freguês realizará o login com seus dados e fará um ou mais pedidos, selecionando os itens desejados e adicionando informações de entrega, como a data do pedido e a data de entrega prevista. A tabela _compra_ armazenará os valores estimados e finais do pedido, além do status de aprovação do dono da banca, que indicará se o pedido foi aprovado, recusado ou entregue. Cada item do pedido terá sua identificação única, nome, quantidade solicitada, preço por quilo e subtotal estimado.

Analisando mais detalhadamente a estrutura das tabelas, observamos as relações estabelecidas por meio de chaves estrangeiras.

Cada tabela possui uma chave primária como elemento principal, responsável por identificar unicamente cada registro. Adicionalmente, algumas tabelas contam com chaves estrangeiras, como é o caso da tabela _compra_, que contém duas chaves desse tipo.

Ao explorarmos as chaves estrangeiras, encontramos o atributo "_id_fregues_" na tabela compra, que estabelece uma ligação com as informações da tabela _fregues_, relacionando cada compra ao cliente específico de forma concisa.

De maneira similar, o atributo "_id_dono_" na tabela _compra_ conecta o pedido ao dono da banca responsável por ele. Essa relação garante que o proprietário tenha acesso aos detalhes do pedido para sua devida gestão.

Por fim, a chave estrangeira "_id_compra_" na tabela _item_compra_ permite que múltiplos itens sejam associados a uma única compra.

Em uma visão macro, é importante notar que um freguês pode realizar diversas compras, um dono de banca pode gerenciar múltiplos fregueses e seus respectivos pedidos, e uma compra pode conter vários itens de compra.

#### Modelo SQL da tabela `compra`

Abaixo, apresentamos um trecho da modelagem em código SQL. O código completo pode ser encontrado em ..\documentos\wad.mdn. O objetivo deste exemplo é ilustrar como o diagrama do banco de dados é traduzido para a linguagem de programação SQL. Os comentários no código visam facilitar a compreensão da função e dos parâmetros de cada elemento da tabela, conforme detalhado anteriormente.

```sql
-- Criação da tabela compra
CREATE TABLE IF NOT EXISTS compra (
    id SERIAL PRIMARY KEY, -- criação de uma chave de identificação
    data_pedido DATE NOT NULL,
    data_entrega DATE NOT NULL,
    id_fregues INT REFERENCES fregues(id), -- chave estrangeira, que permite relação com a tabela de origem
    id_dono INT REFERENCES dono_banca(id),
    valor_estimdo_total NUMERIC(10,2) NOT NULL, -- definição de inserção numérica som 10 dígitos máximos e 2 casas decimais (dinheiro)
    valor_final_total NUMERIC(10,2) NOT NULL,
    aprovado_por_dono VARCHAR(20) NOT NULL
);
```

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

Amazon Web Services, Inc. O que é modelagem de dados? Amazon Web Services, Inc., s.d. Disponível em: &lt;https://aws.amazon.com/pt/what-is/data-modeling/#:~:text=A%20modelagem%20de%20dados%20traz,sistema%20em%20toda%20a%20organiza%C3%A7%C3%A3o>. Acesso em: 08 de maio de 2025.

<br>

---
---