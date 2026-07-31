// console.log("Hello")

let ans1=document.getElementById('Grandfather')

let ans2=document.getElementById('Father')

let ans3=document.getElementById('Child')


ans1.addEventListener('click',()=>{
  console.log("Grandfather Triggered")
},false)

ans2.addEventListener('click',()=>{
  console.log("father Triggered")
},false)

ans3.addEventListener('click',()=>{
  console.log("Child Triggered")
},false)


