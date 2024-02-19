function mayorQue(numero) {
    return (otroNumero) => { return otroNumero > numero};
}

const resultadoDeMayorQue = mayorQue(20)
const resultado = resultadoDeMayorQue(30)
console.log(resultado)

function imprimirCadaUno(array, fn){ 
    for(let i=0; i < array.length; i++){
        fn(array[i])
    }
}

const nombres = ["Daniel", 12432, "Lucas", false]

imprimirCadaUno(nombres, alert)