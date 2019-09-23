/*var arreglo = Array(6);
arreglo = [1, true,'pizza', false,'coca', 3, 4];*/


function TipoDeDatos(arreglo){
    var contString = 0;
    var contNumber = 0;
    var contBoolean = 0;
			
	for (var i = 0; i < arreglo.length ; i++){				
        
        if( typeof arreglo[i] === 'string' ){
            contString++;
        }else if ( typeof arreglo[i] === 'number'){
            contNumber++;
        }else if (typeof arreglo[i] === 'boolean'){
            contBoolean++;
        }
    }
    
    console.log('Numero de enteros: ' + contNumber);
    console.log('Numero de string: ' + contString);
    console.log('Numero de booleanos: ' + contBoolean);
}