
let ans=document.querySelector("#i2")

let ans2=document.querySelector("#i3")

let ans3=document.querySelector("#i4")

let a=0;
let val;

ans2.addEventListener('click',()=>{
 val=setInterval(()=>{
  ans.innerHTML=a;
  a++;
},1000)}
)

ans3.addEventListener('click',()=>{
   clearInterval(val) 
}
)







