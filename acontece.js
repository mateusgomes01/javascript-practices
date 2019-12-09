function acontece(alunos, min){
	var resultadoAlunos = [];

	for( let i=0 ; i<alunos.length ; i++ ){
		let adiantados = 0;
		for( let j=0 ; j<alunos[i].length ; j++ ){
			alunos[i][j] <= 0 ? adiantados++ : ;
		}

		resultadoAlunos.push( adiantados >= min ? true : false);
	}

	return resultadoAlunos;
}

console.log(acontece([ [10, -5, 3, 0] , [-1, 3, 4, 5] ], 2));