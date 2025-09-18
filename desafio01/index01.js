class Lanche{
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  showIngredientes() {
    console.log(`
      -- PEDIDO FEITO:
      Pão: ${this.pao}, 
      Carne: ${this.carne}, 
      Tipo de queijo: ${this.queijo},
      Salada: ${this.salada},
      Adicionar molho: ${this.molho ? "Sim" : "Não"}`
    );
  }
}

class LancheBuilder {
  constructor() {
    this.pao = "";
    this.carne = "";
    this.queijo= "";
    this.salada = "";
    this.molho = false;
  }

  setPao(pao) {
    this.pao = pao;
    return this;
  }

  setCarne(carne) {
    this.carne = carne;
    return this;
  }

  setQueijo(queijo) {
    this.queijo = queijo;
    return this;
  }

  setSalada(salada) {
    this.salada = salada;
    return this;
  }

  setMolho(molho) {
    this.molho = molho;
    return this;
  }

  build() {
    return new Lanche(
      this.pao,
      this.carne,
      this.queijo,
      this.salada,
      this.molho
    );
  }
}

const lanche01 = new LancheBuilder()
  .setPao("Briochi")
  .setCarne("Bovina")
  .setQueijo("Mussarela")
  .setSalada("Tomate")
  .setMolho(true)
  .build();


const lanche02 = new LancheBuilder()
  .setPao("Italiano")
  .setCarne("Frango")
  .setQueijo("Prado")
  .setSalada("Milho")
  .setMolho(false)
  .build();


lanche01.showIngredientes();
lanche02.showIngredientes();

