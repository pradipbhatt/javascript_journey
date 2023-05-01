const percent = (prompt("Enter your percentage ="));
if(percent>90 && percent <=100)
{
    console.log("A");
}
else if(percent<90 && percent>80)
{
    console.log("B");
}

else if (percent <80 && percent >70 ){
    console.log("C ");
}

else if (percent <70 && percent >60 ){
    console.log("D ");
}

else{
    console.log("You're not passsed");
}