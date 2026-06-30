const fibonacci = function(count) {
  let n= Number(count);

  if (n < 0) {
        return "OOPS";
    }

  if (n === 0) {
        return 0;
    }

    let fib =[0, 1];

     for (let i = 2; i <= n; i++) {
         let suivant = fib[i - 1] + fib[i - 2];
        fib.push(suivant); 
    }


     return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
