const percent = (prompt("Enter your number ="));
if(percent>0)
{
    console.log("You  have entered Positive Number");
}
else if(percent==0)
{
    console.log("You have entered Zero");
}

else if (percent < 0 ){
    console.log(" You have entered Negative Number ");
}

else{
    console.log(" You are not entering Integer value");
}