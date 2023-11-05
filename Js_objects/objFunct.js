//function inside an object

const main={
    name:'Sapana',
    roll:39,
    subs:{
        math:20,
        science:30,
    },
    def: function(){
        console.log("hello world");
    },
};
//accessing function inside an object
// console.log(main.def()); 
main.def();