/* Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
Crie um construtor para ele e importe-o como o módulo aluno. */

/* Passo 2
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */


// Objeto aluno



let aluno = {
    ConstruirAluno:        
        function Aluno(_nome, _qtdFaltas, _notas, _calcularMedia, _faltas) {
        this.nome = _nome;
        this.quatidadeDeFaltas = _qtdFaltas;
        this.notas = _notas;        
        this.calcularMedia = function(){
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++){
                soma += this.notas[i]
            }
            const media = soma/this.notas.length;
            return media.toFixed(2);
        }   
        this.faltas = function(){
            let addUmaFalta = this.quatidadeDeFaltas + 1;
            return addUmaFalta;
        }
    

module.exports = aluno;

// Função calcularMedia() que chamaremos via callback

/*let calcMediaFun = function calcularMedia(){ 
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++){
        soma += this.notas[i]
    }
    const media = soma/this.notas.length;
    return media.toFixed(2);
} */


// Função faltas() que chamaremos via callback
/*
let calcFaltas = function faltas(){ 
    let addUmaFalta = this.quatidadeDeFaltas + 1;
    return addUmaFalta;
}*/


// Construção de um alunos via função construtora

let aluno1 = new aluno.ConstruirAluno('Rafael Saldanha',4,[3,5,8],this.calcularMedia,this.faltas)
let aluno2 = new aluno.ConstruirAluno('Diego Squillaci', 3,[9,10,8], this.calcularMedia,this.faltas)
let aluno3 = new aluno.ConstruirAluno('Tais Melo', 2,[7,10,8], this.calcularMedia,this.faltas)
let aluno4 = new aluno.ConstruirAluno('Paula Oliveira', 1,[10,10,8], this.calcularMedia,this.faltas)
let aluno5 = new aluno.ConstruirAluno('Gilberto Cosmo', 3,[8,10,8], this.calcularMedia,this.faltas)

aluno.listaDeAlunos = [aluno1,aluno2,aluno3,aluno4,aluno5]

/* 
console.log(aluno1)
console.log('A média do aluno ' + aluno1.nome + ' é: ' + aluno1.calcularMedia())
console.log('As faltas do aluno ' + aluno1.nome + ' eram: ' + aluno1.quatidadeDeFaltas + ' Agora são: ' + aluno1.faltas())
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(aluno2)
console.log('A média do aluno ' + aluno2.nome + ' é: ' + aluno2.calcularMedia())
console.log('As faltas do aluno ' + aluno2.nome + ' eram: ' + aluno2.quatidadeDeFaltas + ' Agora são: ' + aluno2.faltas())
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(aluno3)
console.log('A média do aluno ' + aluno3.nome + ' é: ' + aluno3.calcularMedia())
console.log('As faltas do aluno ' + aluno3.nome + ' eram: ' + aluno3.quatidadeDeFaltas + ' Agora são: ' + aluno3.faltas())
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(aluno4)
console.log('A média do aluno ' + aluno4.nome + ' é: ' + aluno4.calcularMedia())
console.log('As faltas do aluno ' + aluno4.nome + ' eram: ' + aluno4.quatidadeDeFaltas + ' Agora são: ' + aluno4.faltas())
console.log('')
console.log('=============================Próximo aluno==========================')
console.log('')
console.log(aluno5)
console.log('A média do aluno ' + aluno5.nome + ' é: ' + aluno5.calcularMedia())
console.log('As faltas do aluno ' + aluno5.nome + ' eram: ' + aluno5.quatidadeDeFaltas + ' Agora são: ' + aluno5.faltas()) */

/* Passo 3
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */


/* Passo 4
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.
*/

// Require do objeto aluno + objeto curso com adição de novo participante

let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'CTD-TN2',
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Junior Skiller', 3,[8,10,8], this.calcularMedia,this.faltas)
            this.listaEstudantes.push(novoAluno)
    }, 

/* 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
 Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma 
 quantidade, tem que estar 10% acima da nota de aprovação.
 */

/* função de aprovação */
    aprovacaoAluno: function(aluno){

        if(alunos.listaDeAlunos[aluno].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[aluno].quatidadeDeFaltas < curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else if (alunos.listaDeAlunos[aluno].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[aluno].quatidadeDeFaltas == curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else { 
            
            console.log('aprovação: ' + false);
            
        }
    },

/* 6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos 
aprovaram ou não.*/

    /* função de aprovação final de todos os alunos */
    aprovacaoFinalAlunos: function(){

        for (let i = 0; i < alunos.listaDeAlunos.length ; i++){

            if(alunos.listaDeAlunos[i].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[i].quatidadeDeFaltas < curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else if (alunos.listaDeAlunos[i].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[i].quatidadeDeFaltas == curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else { 
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' NÃO APROVADO com média ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + false);

            }
        }
    }
}

curso.addAluno();


curso.aprovacaoFinalAlunos()
