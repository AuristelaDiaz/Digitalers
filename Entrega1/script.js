const numeros = [10, 20, 30, 40, 50, 60, 70];

function gastoConIva(num){
    return (num*0.21)+num;
}

function map(array, C) {
    const resultado = [];

    for (let i=0;i<array.length;i++){
        resultado.push(C(Number(array[i])));
    }
    return resultado;
}
console.log(map(numeros, gastoConIva));