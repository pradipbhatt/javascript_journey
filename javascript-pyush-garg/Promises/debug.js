function myDisplayer(result){
     console.log(result);
     }

     function myFunction(num1, num2, result){
        let sum = num1 + num2 ;
        result(sum);
     }

     function Multiply(num1 , num2 , multi){
         let mul = num1 * num2 ;
         multi(mul);
     }

     Multiply(10 , 20 , myDisplayer);
     myFunction(5, 10 , myDisplayer);