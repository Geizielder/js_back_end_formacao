#JavaScript Objetos

####palavras-chave:objetos-literais, prcorrer-e-alterar-objetos orientação-a-objetos, protótipo-e-herança...

##O que são objetos
    -Para trabalhar com objetos no JS deve-se ternoção de que todo objetos é formado por uma par chave:valor.
    -Sintax básica de objeto em JS:
        -Ex.:const nome = {
            cheve:"String",
            chave:Numero,
            ...
        }
        
##Acessando Objetos
    -Usando a notação de ponto o objeto é acessado de uma forma muito semelhante ao uso de metodos.
    -Exemplo:
        cliente.nome: acessa o valor da chave nome.
    -Usando notação de chaves 
    -Exemplo: 
        ```cliente[chaves[0]]```
    -Obs: Não é é possível usar valores variáveis usando a notação de ponto
    -Exemplo:
        `const chave = "nome"`
        `console.log(cliente.chave)`
        `console.log(cliente[chave])`aqui o valor de nome seria exibido.
    -Obs2: Quando se tenta acessar uma chave que não exites nenhum erro é exibido, mas retorna undefined.
    -Para adicionar chave e valor a um objeto em JS basta usar a notação de ponto
    -Exemplo:
        `cliente.fone = "985874598"`
        o campo a chave fone com o valor atribuido será adicinada a o objeto. 
    