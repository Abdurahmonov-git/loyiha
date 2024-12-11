const madalka=document.querySelector('#madalka')
const obsa=document.querySelector('#obsa')
const absa=document.querySelector('#absa')
const chiqish=document.querySelector('#chiqish')
const ochish=document.querySelector('#ochish')
const madalka2=document.querySelector('#madalka2')
const chiqish2=document.querySelector('#chiqish2')
obsa.addEventListener("click" ,()=>{
    madalka.style.display='block'
    chiqish.style.display='block'
    obsa.style.display='none'
})
chiqish.addEventListener("click" ,()=>{
    madalka.style.display='none'
    chiqish.style.display='none'
    obsa.style.display='block'
})
absa.addEventListener("click" ,()=>{
    madalka2.style.display='block'
    chiqish2.style.display='block'
    absa.style.display='none'
})
chiqish2.addEventListener("click" ,()=>{
    madalka2.style.display='none'
    chiqish2.style.display='none'
    absa.style.display='block'
})
const izlash=document.querySelector('#izlash')
const chiqish3=document.querySelector('#chiqish3')
const input=document.querySelector('#input')
const yopilish=document.querySelector('#yopilish')
izlash.addEventListener("click",()=>{
    yopilish.style.display='none'
    izlash.style.display='none'
    input.style.display='block'
    chiqish3.style.display='block'
})
chiqish3.addEventListener("click",()=>{
    yopilish.style.display='flex'
    izlash.style.display='block'
    input.style.display='none'
    chiqish3.style.display='none'
})
const izlash2=document.querySelector('#izlash2')
const chiqish4=document.querySelector('#chiqish4')
const burger1=document.querySelector('#burger1')
const burger2=document.querySelector('#burger2')
const yopilish2=document.querySelector('#yopilish2')
izlash2.addEventListener("click",()=>{
    izlash2.style.display='none'
    input.style.display='block'
    chiqish4.style.display='block'
})
chiqish4.addEventListener("click",()=>{
    izlash2.style.display='block'
    input.style.display='none'
    chiqish4.style.display='none'
})
burger1.addEventListener("click",()=>{
    yopilish2.style.display='block'
    burger2.style.display='block'
    burger1.style.display='none'
})
burger2.addEventListener("click",()=>{
    yopilish2.style.display='none'
    burger2.style.display='none'
    burger1.style.display='block'
})

function updateNumbers() {
    const results = document.querySelectorAll('.result');
    let currentNumber = 0;
  
    const interval = setInterval(() => {
      results.forEach(result => {
        result.textContent = currentNumber;
      });
      currentNumber++;
      if (currentNumber > 1250) {
        clearInterval(interval);
      }
    }, 1);
  }
  
  updateNumbers();
  