/*var arreglo = Array(5);
    arreglo = [1,2,3,4,5];
*/

function SumaYPromedio(arreglo){
	var suma = 0;
			
	for (var i = 0; i < arreglo.length ; i++){				
		suma = suma + arreglo[i];
	}
			
	console.log('Suma = ' + suma + '; Promedio = ' + suma/arreglo.length);
}