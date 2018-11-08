// Arrays
// 100% correctness

function solution(A) {
  
  const N = A.length;
  const known = {};

  for ( var i = 0; i < N; i++ ) {
    var K = A[i];

    if ( !known[K] )
      known[K] = 1;
    else if(known[K])
      known[K] = known[K] + 1;
  }

  for( var key in known ) {
    if( (known[key] % 2) == 1 ) {
      return parseInt(key);
    }
  }

}