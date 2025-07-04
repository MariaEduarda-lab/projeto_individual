# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets\inteli_logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Nome do projeto
Kombinado

<p align="center">
  <img src="assets\kombinado.jpeg" alt="[Texto alternativo]" border="0" width=40% height=40%></a>
</p>

<br>


## 👨‍🎓 Integrante:
- <a href="www.linkedin.com/in/maria-eduarda-barbosa-514a64215">Maria Eduarda Barbosa Oliveira</a> 

## 👩‍🏫 Professores:

### Orientadora:
- <a href="https://www.linkedin.com/in/laizaribeiro/">Laíza Ribeiro Silva</a>

### Instrutor:
- <a href="https://www.linkedin.com/in/afonsolelis/">Afonso Cesar Lelis Brandão</a>

## 📜 Descrição

O projeto Kombinado tem como objetivo criar uma aplicação web para resolver o problema de Lu, uma feirante com muitas demandas em seu empreendimento. Para otimizar seu fluxo de trabalho, o projeto surge como uma solução, centralizando os pedidos dos fregueses em um único lugar, em vez de sobrecarregar seu WhatsApp pessoal. A aplicação contará com diversas funcionalidades, sendo as principais, na versão para o cliente: uma página com login e senha, um espaço para realizar pedidos, acompanhar os preços e o status da entrega, além de informações básicas como o valor total e o preço dos produtos individuais. Já na versão para a dona da banca, será possível acompanhar esses pedidos e atualizar os valores das mercadorias, bem como gerenciar os produtos existentes e disponíveis.


## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>assets</b>: aqui estão os arquivos públicos como imagens e fontes.

- <b>config</b>: aqui estão os arquivos relacionados à configuração do projeto.
  -   <b>database.js</b>: Arquivo de configuração para a conexão com o banco de dados.

- <b>controllers</b>: aqui está a lógica de controle das requisições da aplicação.

- <b>documentos</b>: dentro da pasta é possível encontrar a documentaçao detalhada do projeto.
  -   <b>wad.md</b>: aqui é possível ver em seções o processo de criação do projeto e seus detalhes relevantes.

- <b>models</b>: aqui estão as definições dos modelos de dados utilizados na aplicação.

- <b>routes</b>: aqui estão definidas as rotas da aplicação.
  -   <b>frontRoutes.js</b>: gerenciamento da navegação do usuário.
  -   <b>userRoutes.js</b>: aqui está localizada a rota específica de um usuário, ou um conjunto deles.

- <b>scripts</b>: aqui estão os arquivos de JavaScript públicos.
  -   <b>init.sql</b>: aqui está o código base em SQL, que apresenta sua regra de negócio.
  -   <b>runSQLScript</b>: aqui existe alguns detalhes de código para funcionamento do banco de dados.

- <b>services</b>: aqui estão os serviços auxiliares da aplicação.
  
- <b>tests</b>: aqui estão os arquivos de testes unitários.
  
- <b>.gitignore</b>: arquivo que especifica arquivos e diretórios que o Git deve ignorar.

- <b>.env.example</b>: arquivo de exemplo para as variáveis de ambiente.

- <b>jest.config.js</b>: arquivo de configuração para o framework de testes Jest.

- <b>package.json</b>: arquivo que contém informações sobre o projeto e suas dependências, de maneira não específica.

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>server.js</b>: arquivo principal que inicializa o servidor da aplicação.

- <b>rest.http</b>: método CRUD para hospedagem e funcionamento.
- <b>test.http</b>: teste método CRUD para hospedagem e funcionamento.


## 🔧 Como executar o código

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.
1. Clone o repositório:
    ```sh
    git clone https://github.com/MariaEduarda-lab/projeto_individual.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd projeto_individual
    ```
3. No "terminal", digite este comando para instalar as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto.
```sh
npm init -y
```

```sh
npm install
```
4. Para inicializar o servidor, digite o seguinte comando:
```sh
node server.js
```
Ou
```sh
npm run start
```
5. Para realizar a migração, digite o seguinte comando:
```sh
node scripts/runSQLScript.js
```
Ou
```sh
npm run migration
```
6. Para realizar os testes de endpoints (pré requisitos: migrações feitas e seridor inicializado)
 **Configure o Postman**:
   ```sh
   - Método: GET/POST/PUT/DELETE
   - URL: http://localhost:3001/[endpoint] (ex: /fregueses)
   - Body (para POST/PUT): JSON com os dados
   ```
  Para mais detalhes sobre os endpoins, [clique aqui](./documentos/wad.md#36-webapi-e-endpoints)
  

Também é possível acessar o projeto diretamente do seu navegador no seguinte link: (em breve)

## 🗃 Histórico de lançamentos

* 0.4.0 - 15/06/2024
    - Entrega final do projeto
    - Vídeo de apresentação das principais criações
    - Novas telas
    - Atualização de código
    - Próximos passos e aprendizagem
    * 
* 0.3.0 - 08/062024
    - Criação de visualizações
    - Integração de backend com frontend
    - Explicações de fluxos do padão mvc
    - Telas de desenvolvimento e sua documentação
    * 
* 0.2.0 - 25/05/2024 : Entrega parte 2
    - Criação de padrão mvc
      - Pasta Models e seus diretórios
      - Pasta Controller e seus diretórios
      - Pasta Routes e seus diretórios
    - Descrição de Endpoints
    * 
* 0.1.0 - 09/05/2005 : Entrega parte 1
    - Introdução
    - Diagrama Banco de Dados
    - Descrição do sistema escolhido
    - Estrutura de pastas e arquivos
    - Como executar o projeto localmente

## 📋 Licença/License

Para acessar a licença: [clique aqui](LICENSE)