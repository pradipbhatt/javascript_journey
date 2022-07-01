let namastebtn=document.querySelector('button');
namastebtn.addEventListener('click',inputmsg);

function inputmsg()
{
   let name=prompt('Enter name of student');
   namastebtn.textContent='Roll nbr 1 ::'+ name;
}