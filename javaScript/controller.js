import { FiguraGeometrica } from "./FiguraGeometrica.js";
import { Ponto } from "./Ponto.js";

const figurasGeometricas = [];
const vetorTempPontos = [];


export function criaId(tipo) {

    const quantidade = figurasGeometricas.length;
    let nome = "";

    if (tipo == "Triângulo") {
        nome = "triangulo";
    } else {
        nome = "retangulo";
    }
    const qtdString = String(quantidade).padStart(3, "0");
    const id = nome + qtdString;
    return id;
}

export function criarPontoFiguraGeometrica(x, y) {
    if (x === "" || y === "") {
        throw new Error(" Não deixe os campos vazios!");
    }
    if (typeof y == "string" || typeof x == "string") {
        throw new TypeError(" O pontos devem possuir um valor númerico!");
    }
    if (x < 0 || y < 0) {
        throw new RangeError(" Os pontos devem ser maiores que zero!");
    }

    const ponto = new Ponto(x, y);
    if (vetorTempPontos.push(ponto)) {
        return true
    } else {
        return false;
    }
}
function verificaQuantidadePontos(tipo) {
    if (tipo == "Triângulo") {
        if (vetorTempPontos.length != 4) {
            return false;
        } else {
            return true;
        }
    } else {
        if (vetorTempPontos.length != 5) {
            return false;
        } else {
            return true;
        }
    }
}
function validarFechamento(tipo) {
    let primeiroPonto = vetorTempPontos[0];
    if (tipo == "Triângulo") {
        let ultimoPontoTriangulo = vetorTempPontos[3];
        if (primeiroPonto.valorX != ultimoPontoTriangulo.valorX && primeiroPonto.valorY != ultimoPontoTriangulo.valorY) {
            return false
        } else {
            return true;
        }
    } else {
        let ultimoPontoRetangulo = vetorTempPontos[4];
        if (primeiroPonto.valorX != ultimoPontoRetangulo.valorX && primeiroPonto.valorY != ultimoPontoRetangulo.valorY) {
            return false
        } else {
            return true;
        }
    }
}

function criaObjetoFiguraGeometrica(id, tipo) {
    const copiaVetorTempPontos = vetorTempPontos.slice();
    const figura = new FiguraGeometrica(id, tipo, copiaVetorTempPontos);
    figurasGeometricas.push(figura);
    vetorTempPontos.length = 0;
    return true;
}

export function criarFiguraGeometrica(id, tipo) {

    if (tipo == "Triângulo") {
        if (!podeFormarTriangulo()) {
            throw new Error("Os pontos informados não formam os lados de um triângulo.");
        }
    }
    if (!verificaQuantidadePontos(tipo)) {
        throw new RangeError(" Devem ser criados 4 pares de pontos para o triângulo!");
    }
    if (!validarFechamento(tipo)) {
        throw new Error(" O primeiroPonto ponto e o último ponto do triângulo devem ser iguais!");
    }
    if (!criaObjetoFiguraGeometrica(id, tipo)) {
        throw new Error(" Erro ao criar objeto figura geométrica!");
    } else {
        return true;
    }
}

function podeFormarTriangulo() {

    const areaTriangulo = vetorTempPontos[0].valorX * (vetorTempPontos[1].valorY - vetorTempPontos[2].valorY) +
        vetorTempPontos[1].valorX * (vetorTempPontos[2].valorY - vetorTempPontos[1].valorY) +
        vetorTempPontos[2].valorX * (vetorTempPontos[0].valorY - vetorTempPontos[1].valorY);

    if (areaTriangulo > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(figurasGeometricas);
