
function ABinario(numero){

    var binario = '';

    if(numero > 0){

        while (numero > 1) {

            if(numero === 2){}

            if (numero % 2 == 0) {
                binario = "0" + binario;
    
            } else {
                binario = "1" + binario;
    
            }
            numero = numero / 2;
        }

    }else if(numero == 0){
        binario = '0';
    }else {
        console.log('No es un entero positivo');
    }

    console.log('El numero a binario es: ' + binario);
}