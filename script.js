/*
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const mainTitle = document.querySelector('#title');
let count = 0;



incrementBtn.addEventListener('click',() =>
{
   count ++;
   mainTitle.innerText = count;

   
})



resetBtn.addEventListener('click',() =>
{
   count = 0;
   mainTitle.innerText = count;

   
})


decrementBtn.addEventListener('click',() =>
{
   count -- ;
   mainTitle.innerText = count;

   
})
*/

const mainTitle = document.querySelector('#title');
let count = 0;

const btns = document.querySelectorAll('.btn');

btns.forEach((b) =>{
b.addEventListener('click',(e) => {
  const styles = e.currentTarget.classList;
    if(styles.contains('decrement'))
    {
      count --;
    }
   else if(styles.contains('increment'))
    {
      count ++;
    }
    else
    {
      count =0;
    }

    mainTitle.innerText = count;
  

})



})








