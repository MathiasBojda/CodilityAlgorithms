// 100% correctness

function solution(N) {

  if ( N < 1 || N > 2147483647) {
    return 0;
  }

  const s = N.toString(2);
  const re = /1(0*)(?=1)/g;
  const matches = s.match(re);

  let biggest = 0;

  if ( !matches || !matches.length)
    return 0;

  for ( var i = 0; i < matches.length; i++ ){
    if ( (matches[i].length-1) > biggest)
      biggest = matches[i].length-1;
  }

  return biggest;

}
