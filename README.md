# Formação Js Back-end

## 1-Tipo  Number
    -Divisão por zero é não é um erro em Js, retorna Infinity.
    -Dividir zero por zero retorna NaN.
    -3.14 PI pode ser usado com Mtah.PI.
    
### Branch dev
    -Trabalhando com Branchs
    -Git checkout -b nomeBranch cria e faz checkout na nova branch
    -Todo código a partir daqui e separarado da branch main/master
    -Em outro momento os conteúdo ser unido atraves de outro comando
## 2-Tipo String
    -concatenação (+).
    -Pesquisar template string ou string literal.
## 3-Tipo Boolean
    - === compara (exemplo, se tipo e valor são iguais), retorno true ou false
# Declarando variáveis

## var, let e const
    -var: em js um variavele pode ser usada antes de ser expressamente declarada como   var, porem isso pode causar problemas de repertição de variaves
    -let: Essa variavel não pode ser usada antes de ser inicializada
    -const: Valor invariavel durante a execução da aplicação.
## Mais sobre booleans
    -Tipo boolean retorna basicamente um true ou false. 
    -Em Js os valores 0 e 1 são considerados respectivamente false e true.
    -fazer testes com null e undefined.
    -Null foi criado no JS como objeto.

## Conversão de tipos
    -Conversão implícita -> permite converter um tipo de dado em outro não é a forma correta de fazer conversão, mas pode acontecer.
    -Conversão Explícita -> A conversão geralmete se dá por mei de outras funções do JS(ex: Number e String).

## Erros
    -A constate foi declarada, mas nnão inicializada(SyntaxError: Inicializador ausente na declaração
    -SyntaxError: missing ) após a lista de argumentos

## Operadores
    -Comparação (== comparação implícita) 
    -Comparação (=== comparação Explícita)
    -typeof mostra o tipo da variavel
    -OBS: as boas práticas indicão o uso do === preferencialmente.
     Para conversão os metodos Explícitos(Number(), String()) são os indicados.
## Funções
    -Função tem dois momentos 
    -Primeiro: Declarção e o que esse função faz
    -Segundo: Execução(uma mesma função pode ser executada 1 ou + vezes)
    -Funcões pode ou não receber parametros(exemplo no arquivo parametro.js)
## Funções(Parâmetros)
    -Parâmetro x Argumento geralmente são trabalhados como sinonimos na programação os dois tem o encargo de passar valores para dentro de uma função, porem vale uma pequisa mais aprofundada. 
    -É importante observar que parâmetros obedecem a ordem especificada na chamada.
    -Uma função que pede dois parametros, mas apenas um e passado retorna erro.
## Funções(Expressões)
    - O escopo geral de uma função é:
        ```
        function nomeDaFuncao (com ou sem parâmetros) {
            bloco de código;
        }
        ```
    -Expressão de função
        -O nome é opicional e geralmente não é usado
        ```
        const soma =  function(num1, num2) {return num1 + num2}
        ```
    - OBS: NO javascript na execução todas as funções e var são lisatda na inicialização.
    - OBS-2: Pesquisar sobre Hoisting
