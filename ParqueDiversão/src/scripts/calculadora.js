function CalcularIdade(dataNascimento) {
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoAtual = new Date().getFullYear();

    return anoAtual - anoNascimento;
}

function VerificarFaixaEtaria(idade) {
    if (idade < 18) {
        return "Criança";

    } else if (idade <= 25) {
        return "Jovem Adulto";

    } else if (idade < 65) {
        return "Adulto";

    } else {
        return "Idoso";
    }
}

function CalcularMetrosParaCentimetros(altura) {
    return altura * 100;
}

module.exports = {
    CalcularIdade,
    VerificarFaixaEtaria,
    CalcularMetrosParaCentimetros
};
