//contact 

let array1 = [1, 2, 3, "Wladimiro"]

let array2 = [null, undefined, true]

array1 = array1.concat(array2)

//console.log(array1);

//join

array1 = array1.join("-")

// console.log(array1);

//push

const array04 = ['becks', 10, 20]

array04.push('novo elemento')

console.log(array04);

//pop

array04.pop();
array04.pop();
array04.pop();
array04.pop();
array04.pop();

// console.log(array04);

//shift

const array05 = ['becks', 10, 20];

console.log(array05);
array05.shift();

console.log("*************************");

console.log(array05);

//unshift


const array06 = ['becks', null, true, 10, 20];

array06.unshift('novo elemento em strig')

console.log(array06);

//slice 

console.log("*************************");

const array07 = ['becks', 'alan', 'wlad'];

const novoArrayQueRecveSlice = array07.slice(2, 3)

//console.log(novoArrayQueRecveSlice);

//splice

console.log("*************************");

const array08 = ['branco', 10, 20, 30, 'novo elemnto'];

console.log(array08) 

array08.splice(1, 4, 'trocar agora')

console.log(array08);

//revert 

console.log("*************************");

const array09 = ['branco', 10, 20, 30, 'novo elemnto'];

console.log(array09.push('teste'));

array09.reverse().pop()

console.log(array09.push('teste'));

console.log(array09);