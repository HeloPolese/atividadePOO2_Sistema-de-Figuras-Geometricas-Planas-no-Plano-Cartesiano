const tipoFiguraGeometrica = document.getElementById("inTipo");
const x = document.getElementById("inX");
const y = document.getElementById("inY");
const btSalvarPontos = document.getElementById("btSalvaPonto");
const btSalvarFiguraGeometrica = document.getElementById("btSalvaFigura");
const idFiguraGeometrica = document.getElementById("inID");
const outMensagemUser = document.getElementById("outMsgUser");

import { criarFiguraGeometrica, criarIdFiguraGeometrica, criarPontoFiguraGeometrica } from "./controller.js";

tipoFiguraGeometrica.addEventListener('change', () => {
    x.disabled = false;
    y.disabled = false;
    try { // try fica na view
        const idGerado = criarIdFiguraGeometrica(tipoFiguraGeometrica.value);
        idFiguraGeometrica.value = idGerado;
    } catch (e) {
        const erro = e.name + " " + e.message;
        outMensagemUser.innerHTML = erro;
    }
    finally {
        console.log("id gerado!");
    }
});

btSalvarPontos.addEventListener("click", () => {

    if (x.value.trim() === "" || y.value.trim() === "") {
        outMensagemUser.innerHTML = "Preencha os campos X e Y!";
    } else {
        const valorX = Number(x.value);
        const valorY = Number(y.value);

        try {
            if (criarPontoFiguraGeometrica(valorX, valorY)) {
                outMensagemUser.innerHTML = "Ponto criado!";
            }
            x.value = "";
            y.value = "";
        } catch (e) {
            const erro = e.name + " " + e.message;
            outMensagemUser.innerHTML = erro;
        }
        finally {
            console.log("\ncriação de pontos finalizada!");
        }
    }

});

btSalvarFiguraGeometrica.addEventListener("click", () => {
    
    if (idFiguraGeometrica.value == "" || tipoFiguraGeometrica.value == "") {
        outMensagemUser.innerHTML = "Não é possível criar figura, existem campos vazios!";
    }
    try {
        if (criarFiguraGeometrica(idFiguraGeometrica.value, tipoFiguraGeometrica.value)) {
            outMensagemUser.innerHTML = "Figura geométrica criada!";
            idFiguraGeometrica.value = "";
            tipoFiguraGeometrica.value = "";
        }
    } catch (e) {
        const erro = e.name + " " + e.message;
        outMensagemUser.innerHTML = erro;
    }
    finally {
        console.log("--- função para Criação de figura finalizada! ---");
    }
});



