// Buatlah fungsi yang untuk menghasilkan bilangan fibonacci yang dimulai dari angka 0 hingga 55. Contoh deret fibonacci yaitu 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
const fibonacci = ():void => {
  let fib = [0, 1]; 
  for (let i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i])
  }
  console.log(fib);
}

fibonacci()