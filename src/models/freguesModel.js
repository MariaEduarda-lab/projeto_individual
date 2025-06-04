class Fregues {
  constructor({ id = null, nome, email, senha, endereco, telefone, dono_banca_id }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.endereco = endereco;
    this.telefone = telefone;
    this.dono_banca_id = dono_banca_id;
  }
}

module.exports = Fregues;