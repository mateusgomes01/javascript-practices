var input = 5;

function fatorial(numero){
	var resultado = 1;
	for(var i=1 ; i<=numero ; i++ ){
		resultado = resultado*i;
	}
	return resultado;
}

fatorial(input);