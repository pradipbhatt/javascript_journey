function countDown(number)
{
    console.log(number);

    //now decrease the passed number by 1
    const newNumber = number -1;
    if (newNumber > 0)
    {
        countDown(newNumber);
    }

    else if(newNumber == 0)
    {
        console.log("Zero Reached 🫣🫣");
    }
}

countDown(30);
// op=n,(n-1),(n-2),(n-3). . .
