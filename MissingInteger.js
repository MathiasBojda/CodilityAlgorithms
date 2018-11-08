//Missing Integer
// 100% Score

function solution(A) {
  
  const N = A.length;
  var firstPos = false;

  A = A.sort((a,b) => { 
    return a - b; 
  });
 
  if(A[N-1] < 1 || A[0] > 1) {
    return 1;
  }

  for (var i=0; i<N; i++) {

    if(A[i]<0) {
      continue;
    } else if (A[i]>0 && firstPos == false) {
      firstPos = true;
      if(A[i]!=1)
        return 1;
    }

    if(A[i+1] == A[i])
      continue;

    if((A[i+1] != A[i]+1)){
      return A[i]+1;
    }

  }

}