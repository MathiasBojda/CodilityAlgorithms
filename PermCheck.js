/*

A non-empty array A consisting of N integers is given.
A permutation is a sequence containing each element from 1 to N once, and only once. */

// 100% correctness

function solution(A) {

  const N = A.length;
  var i;

  A  = A.sort((a,b) => { return a - b; });

  if(A[0] !== 1 && A[N-1] != N)
    return 0;

  for( i = 0; i < N; i++ ) {
    if(A[i+1] && A[i+1] !== A[i]+1 )
      return 0;
  }
  
  return 1;
  
}
