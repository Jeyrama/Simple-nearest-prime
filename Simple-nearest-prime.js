/*
In this challenge, you will be given a number and 
your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127
*/


// Solution

function solve (n) {
  if (isPrime(n)) return n;

  for (let i = 1; i < n; i++) {
      if (isPrime(n - i)) return n - i;
      if (isPrime(n + i)) return n + i;
  }
}

function isPrime(n) {
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  let i = 5, w = 2;

  while (i * i <= n) {
      if (n % i == 0) {
          return false;
      }
      i += w;
      w = 6 - w;
  }
  return true;
}

// or

function solve(n){
  function isPrime(number) {
  let start = 2;
  while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
  }

for(let i =0;i<100;i++){
  let lowNumb = n-i
  let highNumb = n+i
  if(isPrime(lowNumb)) return lowNumb
  else if (isPrime(highNumb)) return highNumb
  }
}