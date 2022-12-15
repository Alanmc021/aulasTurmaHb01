// let - var - const 

let numero = 10
let nome = 'Alan'
let isValid = true
// console.log(typeof (numero));

// Number - String - Bollean - Null - undefined - Symbol 

// Array 

// em js os arrais sao heterogeneos 

// const numeros = [numero, nome, isValid]
// console.log(numeros);

const aluno01 = {
    id: 0001,
    nome: 'Wladmorio vladnestico',
    idade: 60
}

const aluno02 = {
    id: 0002,
    nome: 'Alan',
    idade: 30
}

const aluno03 = {
    id: 0003,
    nome: 'bekinho',
    idade: 20
}

const post01 = {
    id: 356,
    title: 'Meu post',
    imgAvatar: 'www.teste.com/img.png',
    imgPost: 'www.teste.com/img.png',
    likeButton: true,
    comentario: ['legal esse visual', 'vc e bonito', 'pagaLitrao'],
    msg: {
        title: 'legal',
    },
}

const post02 = {
    id: 234,
    title: 'Meu post',
    imgAvatar: 'www.teste.com/img.png',
    imgPost: 'www.teste.com/img.png',
    likeButton: true,
    comentario: ['legal esse visual', 'vc e bonito', 'pagaLitrao'],
    msg: {
        title: 'legal',
    },
}

const alunos = [aluno01, aluno02, aluno03] //esse array vai te o "infinito" 

const postInstagram = [post01, post02]
// console.log(postInstagram);

// const meuArray = [1, 2, 3, 4, 5]
// const meuArray = ['alan', 'fabio', 'bekinho']
// console.log(meuArray[2]);

// console.log(meuArray.length);
// for (let i = i;  i < meuArray.length ; i++ ) {
//     console.log(meuArray[i]);
// }
const meuArray = ['alan', 'fabio', 'bekinho']

const resultado = meuArray.map((el) => { return el.toUpperCase() })
console.log(resultado);