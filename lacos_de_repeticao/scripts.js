const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

//includes -> retorna um boolean true or false
//indexOf - retora a posição de um determonado valor em uma array 
const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0 = alunos][index 2 'Ana']  
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
                    //[1 = medias...][index 2 media 9 ]      
    } else {
        return "Aluno não cadastrado."
    }
}

console.log(exibeNomeNota("Geizielder"));