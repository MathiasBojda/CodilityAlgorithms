// Time complexity
// 100% correctness

function solution(A) {

  const N = A.length;
  A  = A.sort((a,b) => { return a - b; });

  if(A[0] != 1 ) return 1;
  if(A[N-1] != N+1 ) return N+1;

  for(var i = 0; i < N; i++) {
    if(A[i+1] != A[i]+1)
      return A[i]+1;
  }

}