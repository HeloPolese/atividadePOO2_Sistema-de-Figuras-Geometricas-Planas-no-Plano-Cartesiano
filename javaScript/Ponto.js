export class Ponto {
  #valorX
  #valorY

  constructor(_valorX, _valorY) {
    this.#valorX = _valorX;
    this.#valorY = _valorY;
  }

  get valorX() {
    return this.#valorX;
  }
  set valorX(_novoX) {
    this.#valorX = _novoX;
  }
  get valorY() {
    return this.#valorY;
  }
  set valorY(_novoY) {
    this.#valorY = _novoY;
  }

  toString() {
    return `(${this.#valorX}, ${this.#valorY})`;
  }
}
