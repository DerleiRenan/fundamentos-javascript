// Parametros da funcao
// function soma(num1, num2) {
//     return num1 + num2;
// }

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(500, 60));

// parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`; 
}

// console.log(nomeIdade(40, "Juliana"))

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1, num2){
    return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(3, 3)))