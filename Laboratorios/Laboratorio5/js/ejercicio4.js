function NumeroAleatorio(numero){
    valores=[];
    var numAleatorio;

    for(var i=0; i<20; i++){
        numAleatorio = (Math.floor(Math.random()*100)+1);
        valores.push(numAleatorio);
    }

    for(var j=0; j<20; j++){
       if(numero === valores[j]){
           console.log('ganaste');
       }else{
           console.log('perdiste');
       }
    }

    return valores;
}