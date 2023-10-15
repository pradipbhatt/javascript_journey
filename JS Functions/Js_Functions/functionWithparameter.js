const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Defining a function
function cat(name) {
  console.log("Hello " + name + ", You're so cute!");
}

// Asking for user input
rl.question("Enter your  name: ", (name) => 
{
  // Calling the function
  cat(name);
  rl.close();
});
