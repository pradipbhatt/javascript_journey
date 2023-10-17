// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// function recurse() {
//   // function code
//   recurse(); //function call inside function
//   // function code
// }

// // function call outside the function
// recurse();

// In the above example, the function recurse() is called inside the function itself. So, it is a recursive function.

// Note: A recursive function should have a terminating condition (also called exit condition) otherwise it goes into an infinite loop.




// program to find the factorial of a number
//  factorial function is defined recursively by passing parameter x.
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }
  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 3;
// calling factorial() if num is non-negative
if (num > 0) 
{
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}
// if number is negative
else 
{
  console.log("Enter a positive number.");
}
