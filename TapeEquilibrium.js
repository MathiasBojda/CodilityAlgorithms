
/*

TapeEquilibrium

100% Correctness 
66% Overall score
Lacking in performance, will try to fix later.

A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
*/

function solution(A) {

  var sumA = 0, sumB = 0, minimalDiff = null, diff, i, x, tapeA = [], tapeB = [];
  
  for( i = 0, x = A.length-1; i < A.length-1; i++, x--) {
    sumA = sumA + A[i];
    sumB = (A[x] + sumB);
    tapeB.unshift(sumB);
    tapeA.push(sumA);
  }
 
  for( i = 0; tapeA.length > i; i++) { 
    diff = Math.abs(tapeA[i] - tapeB[i]);
    if( minimalDiff === null || minimalDiff > diff )
      minimalDiff = diff;
  }

  return minimalDiff; 
}
