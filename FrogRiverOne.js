
// FrogRiverOne
// 100% correctness

function solution(X, A) {

  var C = 0;
  var S = {};

  for(var i=0; i < A.length; i++){
    if(A[i] <= X && !S[A[i]] ){
      S[A[i]] = true; C++;
      if(C == X)
        return i;
    } 
  }

  return -1;
  
}
