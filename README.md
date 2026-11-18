# **Exercicio Parque de Diversao**

Dentro do diretório do seu usuário (sua matricula) crie o diretório Projetos, se o mesmo não existir, e dentro dele crie o diretório _Aula1711_ e dentro de aula criaremos *_ExParqueDiversao_*

Em *_ExParqueDiversao_*: 
- Crie o diretório _src_
- Crie o App.js
- Crie o package.json 
Em *_src_*:
- Crie o diretório _scripts_
- Crie o diretório _rules_
Em *_rules_*:
- Crie o arquivo *rules.json* 
- Crie o arquivo *rules.js*
Em *_scripts_*:
- Crie o arquivo *calculadoras.js*

No arquivo *rules.json* vocês devem criar um objeto "Parque" contendo uma lista de objetos, o primeiro objeto dessa lista será o objeto "Brinquedos" que será uma lista dos brinquedos do parque, o segundo objeto dessa lista será o objeto "Restricoes" que conterá as regras de restrições do brinquedo, veja o exemplo a seguir:

_"Restricoes": [{_
        _"Brinquedos": [_
                _{ "nome": "Casa Assombrada", "regras": ["Idade", "Altura"] }_
                _{ "nome": "Montanha Russa", "regras": ["Altura"] }_
                _{ "nome": "Carrinho de bate-bate", "regras": [] }_
        _]_
        _"Regras": [_
                _{ "nome": "Idade", "regra": "X > 18" }_
                _{ "nome": "Altura", "regra": "X >= 170" }_
        _]_
_} ]_

Dentro de rules.js você deverá criar uma função para receber como parâmetro os dados da pessoa indo no brinquedo (será enviado um objeto que passou por JSON.stringify), e o nome do brinquedo, a partir disso a função deve verificar se a pessoa pode ou não entrar naquele brinquedo.

Dentro de calculadoras.js você deverá criar três funções, sendo elas:
- CalcularIdade( receberá como parâmetro a data de nascimento ) deverá retornar a idade em numero inteiro arredondada para cima a partir da data de nascimento.
- VerificarFaixaEtária (receberá como parâmetro a idade) deverá retornar a faixa etária seguindo as regras: se x < 18 é criança, se 18 <= x <= 25 é Jovem Adulto, se x > 25 e x < 65 é adulto por fim se x >= 65 é idoso
- CalcularMetrosParaCentimetros (receberá como parâmetro a altura em metros) deverá retornar essa mesma altura em centimetros

Por fim em APP.js deverá esperar 6 argumentos:
- Nome
- Data de Nascimento
- Altura em metros
- Brinquedo
- Data em que está visitando o parquinho
- Nome Acompanhante

Nele também deverá verificar se é uma criança ou um idoso visitando ao parque, se for deverá estar com um acompanhante, caso contrário deverá ser impedido e o programa deverá parar

Por fim a partir dos argumentos passados, verifique se preenche os requisitos para uso do brinquedo escolhido, caso preencha pode entrar, caso contrário deve ser impedido e o programa deverá parar

Caso o brinquedo solicitado seja inválido deverá ser avisado e o programa deve parar
