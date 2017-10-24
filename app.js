//Psedcodigo

//
//1.Crear una función que reciba 2 arreglos como parametro
//2.Comprobar si la longitud de los arreglos es diferente
	//2.1-Si los arreglos no son iguales regresar falso
	//2.2-Si tienen la misma longitud continuar el proceso
//3.Comprobar uno a uno los valores del arreglo
	// 3.1- Si no son iguales regresar "False"
	// 3.2- Si son iguales sigue comparando uno a uno
//4. Regresamos un "True"



var comparacion = function (array1, array2) {
	if (array1.length !== array2.length){
		document.write("Los arreglos no tienen la misma longitud")
		return false;
	}

	else{
		for (var i = 0; i < array1.length; i++){
			console.log(array1[i], array2[i])

			if(array1[i] !== array2[i]){
				document.write("los arreglos son diferentes")
			return false;
			}
				document.write("los arreglos son iguales")
		}  return true;
	}
}
var arreglo1 = [1,2,3,4,5,6,7,8,9,0];
var arreglo2 = [1,2,3,4,5,6,7,8,9,0];