function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0){
       myResolve("Resolved");
    }
    else {
       myReject("REJECTED");
    }
});

myPromise.then(
   function(value){
    myDisplayer(value);
   },
   
   function(error){
    myDisplayer(error);
   }
   
)