const {
    CalcularIdade,
    VerificarFaixaEtaria,
    CalcularMetrosParaCentimetros
} = require('./src/scripts/calculadoras');

const VerificarRegras = require('./src/rules/rules');

function ParqueDiversao(nome, nascimento, altura, brinquedo, dataVisita, acompanhante) {

    const idade = CalcularIdade(nascimento);
    const faixaEtaria = VerificarFaixaEtaria(idade);

    console.log(`\nBem-vindo ao parque, ${nome}!`);
    console.log(`Data da visita: ${dataVisita}`);
    console.log(`Idade: ${idade} anos (${faixaEtaria})`);

    if ((faixaEtaria === "Criança" || faixaEtaria === "Idoso") && !acompanhante) {
        console.log("Entrada negada! É necessário estar acompanhado.");
        return;
    }

    if (acompanhante) {
        console.log(`Acompanhante: ${acompanhante}`);
    }

    const alturaCM = CalcularMetrosParaCentimetros(Number(altura));

    const dados = {
        nome: nome,
        idade: idade,
        altura: alturaCM
    };

    const permitido = VerificarRegras(dados, brinquedo);

    if (!permitido) {
        console.log("Entrada negada! Brinquedo inválido ou requisitos não atendidos.");
        return;
    }

    console.log(`Entrada permitida em: ${brinquedo}!`);
}

// Argumentos do terminal
const argumentos = process.argv.slice(2);

if (argumentos.length !== 6) {
    console.log("Informe os 6 argumentos necessários.");
    process.exit(1);
}

const [nome, nascimento, altura, brinquedo, dataVisita, acompanhante] = argumentos;

ParqueDiversao(nome, nascimento, altura, brinquedo, dataVisita, acompanhante);
