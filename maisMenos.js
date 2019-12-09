function maisMenos(array){
	var newArray = [];	
  let positives=0, negatives=0, zeros=0;

  for( let i=0 ; i<array.length ; i++ ){
      
      array[i]>0 ? positives++ : array[i]<0 ? negatives++ : zeros++;

  }

  newArray.push(positives/array.length);
  newArray.push(negatives/array.length);
  newArray.push(zeros/array.length);

  return newArray;

}

console.log(maisMenos([1, 2, 0, -1]));