//global variable

let a="sun";
function star()
{
    a="moon";
    console.log(a);
}
star();//moon, as the value of local variable a, "sun" is overridden by "moon"