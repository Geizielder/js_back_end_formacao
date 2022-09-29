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