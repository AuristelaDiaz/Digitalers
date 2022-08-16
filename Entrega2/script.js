let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valor = input.value;
    let contraseña = /^[a-z+A-Z+0-9*]{12,30}$/
    if (contraseña.test(valor)) {
        console.log('valido');
    }else{
        console.log('invalido');
    }
});