import { FiguraGeometrica } from "./FiguraGeometrica.js";
import { Ponto } from "./Ponto.js";

const figurasGeometricas = [];
const vetorTemporarioDePontos = [];

export function criarIdFiguraGeometrica(tipo) {
    const quantidade = figurasGeometricas.length;
    let nome = "";

    if (tipo == "Triângulo") {
        nome = "triangulo";
    } else {
        nome = "retangulo";
    }
    const quantidadeFormatada = String(quantidade).padStart(3, "0");
    const id = nome + quantidadeFormatada;
    return id;
}

export function criarPontoFiguraGeometrica(x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError(" Os pontos devem ser maiores que zero!");
    }
    const ponto = new Ponto(x, y);
    vetorTemporarioDePontos.push(ponto); return true;
}

function verificaQuantidadePontos(tipo) {
    if (tipo == "Triângulo") {
        if (vetorTemporarioDePontos.length != 4) {
            return false;
        } else {
            return true;
        }
    } else {
        if (vetorTemporarioDePontos.length != 5) {
            return false;
        } else {
            return true;
        }
    }
}

function validarFechamento(tipo) {
    let primeiroPonto = vetorTemporarioDePontos[0];

    if (tipo == "Triângulo") {
        let ultimoPontoTriangulo = vetorTemporarioDePontos[3];
        if (primeiroPonto.valorX != ultimoPontoTriangulo.valorX || primeiroPonto.valorY != ultimoPontoTriangulo.valorY) {
            return false;
        } else {
            return true;
        }
    } else {
        let ultimoPontoRetangulo = vetorTemporarioDePontos[4];
        if (primeiroPonto.valorX != ultimoPontoRetangulo.valorX || primeiroPonto.valorY != ultimoPontoRetangulo.valorY) {
            return false
        } else {
            return true;
        }
    }
}

function criaObjetoFiguraGeometrica(id, tipo) {
    const copiavetorTemporarioDePontos = vetorTemporarioDePontos.slice();
    const figura = new FiguraGeometrica(id, tipo, copiavetorTemporarioDePontos);
    figurasGeometricas.push(figura);
    vetorTemporarioDePontos.length = 0;
    return true;
}

export function criarFiguraGeometrica(id, tipo) {

      if (!verificaQuantidadePontos(tipo)) {
        if (tipo == "Triângulo") {
            throw new RangeError(" Devem ser criados 4 pares de pontos para o triângulo!");
        } else { throw new RangeError(" Devem ser criados 5 pares de pontos para o retângulo!"); }
    }
    if (tipo == "Triângulo") {
        if (!trianguloEhValido()) {
            throw new Error("Os pontos informados não formam os lados de um triângulo.");
        }
    }
    if (!validarFechamento(tipo)) {
        throw new Error(" O primeiroPonto ponto e o último ponto da figura devem ser iguais!");
    }
    if (!criaObjetoFiguraGeometrica(id, tipo)) {
        throw new Error(" Erro ao criar objeto figura geométrica!");
    } else {
        return true;
    }
}

function trianguloEhValido() {

    const areaBruta = vetorTemporarioDePontos[0].valorX * (vetorTemporarioDePontos[1].valorY - vetorTemporarioDePontos[2].valorY) +
        vetorTemporarioDePontos[1].valorX * (vetorTemporarioDePontos[2].valorY - vetorTemporarioDePontos[0].valorY) +
        vetorTemporarioDePontos[2].valorX * (vetorTemporarioDePontos[0].valorY - vetorTemporarioDePontos[1].valorY);

    if (areaBruta > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(figurasGeometricas);
