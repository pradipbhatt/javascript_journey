// Simple Calculator
let number=(prompt("Enter Any operands ="));
switch (number){
    case '+':
        {
            let a =parseInt(prompt("Enter the first number: "));
            let b =parseInt(prompt("Enter the second number: "));
            console.log(`The sum of ${a} and ${b} is ${a+b}.`);
            break;
        }

        case '-':
        {
            let a=(prompt("Enter first number ="));
            let b=(prompt("Enter second number ="));
            console.log(a-b);
            break;
        }


        case '*':
        {
            let a=(prompt("Enter first number ="));
            let b=(prompt("Enter second number ="));
            console.log(a*b);
            break;
        }


        case '/':
        {
            let a=(prompt("Enter first number ="));
            let b=(prompt("Enter second number ="));
            console.log(a/b);
            break;
        }

        default:
            {
                console.log("Invalid input");
            }
}
