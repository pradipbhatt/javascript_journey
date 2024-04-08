function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
  }
  
  function myCalculator(num1,num2){
    let sum = num1+num2;
    return sum;
  }
  let result = myCalculator(15,5);
  myDisplayer(result);