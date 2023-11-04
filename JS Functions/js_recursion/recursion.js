//to print first 5 numbers in ascending order using recursion
function count(num)
{
    console.log(num);
    const number= num+1;
  if(number<6)
    {
        count(number);
    }
}
count(1);