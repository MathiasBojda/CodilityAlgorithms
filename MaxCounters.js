// Max Counters
// 100% correctness
// 80% performance, fails on extreme_large, will have to fix later,
// Task Score 88%

function solution(N, A) {

  const M = A.length;
  const counters = [];
  var O;
  var maxCounter=0;

  for(var i=0;i<N;i++)
    counters.push(0);

  for(var k = 0 ; k < M; k++ ) {
    O = A[k]-1;
    if(A[k]>N) {
      for(var j = 0; j<counters.length; j++)
        counters[j] = maxCounter;
    } else {
      counters[O] = counters[O]+1;
      if(counters[O]>maxCounter) {
        maxCounter = counters[O];
      }
    }
  }

  return counters;
}