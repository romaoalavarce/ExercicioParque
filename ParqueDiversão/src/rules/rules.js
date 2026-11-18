const parque = require('./rules.json');

function VerificarRegras(dados, brinquedo) {

    const brinquedos = parque.Parque[0].Brinquedos;

    let escolhido = null;

    for (const b of brinquedos) {
        if (b.nome.toLowerCase() === brinquedo.toLowerCase()) {
            escolhido = b;
            break;
        }
    }

    if (escolhido === null) {
        return false;
    }

    for (const regra of escolhido.regras) {

        if (regra === "Idade" && dados.idade <= 18) {
            return false;
        }

        if (regra === "Altura" && dados.altura < 170) {
            return false;
        }
    }

    return true;
}

module.exports = VerificarRegras;
