// Passing cars
// 100% correctness

function solution(A) {

  var east = 0;
  var count = 0;

  for(var i = 0; i < A.length; i++) {
    
    if( A[i] == 0 ) {
      east = east + 1;
    }
    else if(east > 0 && A[i] == 1){
      count = count + east;
    }

    if(count > 1000000000)
       return -1;

  }

  return count;

}