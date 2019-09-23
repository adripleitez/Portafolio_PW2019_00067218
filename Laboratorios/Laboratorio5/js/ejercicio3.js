/* var arreglo = Array(5);
    arreglo = [3,6,7,8,6,6];
var numero = 6; */


function NumOcurrencias(arreglo, numero){
    var ocurrencia = 0;
    	
	for (var i = 0; i < arreglo.length ; i++){				
        if(arreglo[i] === numero){
            ocurrencia++;
        }
    }
    
    console.log('Numero de ocurrencias: ' + ocurrencia);
}