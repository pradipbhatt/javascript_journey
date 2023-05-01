let i=2;
while (i<10) {
    console.log(i);
    i++;
    break;
}

// result is a number 2 because the condition is true and the loop is executed only once.


// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0,number;


while(true) {
    number =(prompt("Enter a number :"));

    //break condition
    if(number <0){
        break;
    }

    // add all positive numbers
    sum =sum + number;
}

// display the sum

console.log(`The sum is ${sum}.`);