const days=document.querySelector('#days')
const hours=document.querySelector('#hours')
const minute=document.querySelector('#minutes')
const seconds=document.querySelector('#seconds')
function time()
{
const currentyear=new Date().getFullYear();
const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`)
const now=new Date();
const difference=newyear-now;
const d=Math.floor(difference/1000/60/60/24);
const h=Math.floor((difference/1000/60/60)%24);
const m=Math.floor((difference/1000/60)%60);
const s=Math.floor((difference/1000)%60);
days.innerHTML=d<10 ? "0"+d:d;
hours.innerHTML=h<10 ?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;


}
setInterval(time,1000)
