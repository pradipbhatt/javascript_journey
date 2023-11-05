// Closures in js, It means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.

function outer() {
  const name = "Pradip";

  function inner() {
    console.log(`Hello, ${name}!`);
  }

  return inner;
}

const greeting = outer();
greeting();

//   Guess the OP :)
