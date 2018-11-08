// Time complexity
// 100% Correctness

function solution(X, Y, D) {
  const equation = (Y/D) - (X/D);
  return Math.ceil(equation);
}