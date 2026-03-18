export class FiguraGeometrica {
  #ID
  #tipo
  #vetPontos

  constructor(_ID, _tipo, _vetPontos) {
    this.#ID = _ID;
    this.#tipo = _tipo;
    this.#vetPontos = _vetPontos;
  }

  get ID() {
    return this.#ID;
  }

  get tipo() {
    return this.#tipo;
  }

  get vetPontos() {
    return this.#vetPontos;
  }

  set vetPontos(_novoVetPontos) {
    this.#vetPontos = _novoVetPontos;
  }

  toString() {
    let strVetPontos = "Coordenadas dos Pontos:";
    this.#vetPontos.forEach(ponto => {
      strVetPontos += `\n${ponto.toString()}`;
    });
    return `ID: ${this.#ID}\n` +
      `Tipo: ${this.#tipo}\n` +
      `${strVetPontos}`;
  }
}
