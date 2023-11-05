function counter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const newCount = counter();
newCount();
newCount();
newCount();


// In this program what we see is function use the closure property of js by using the count variable which is declared outside the function and it is used inside the function and it is incremented by 1 and printed in console.log.

