
let a;
let ans=document.querySelector('#i1')

let ans2=document.querySelector('#i2')

ans2.textContent="This is My Clock App"

function ShowTime()
{
  a=new Date()

  ans.innerHTML=(`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`)
}


setInterval(ShowTime,1000)



// let a=0
// let ans=setInterval(()=>{
//   console.log(a)
//   a++
// },100)

// // ans
// let ans2=()=>{
//   clearInterval(ans);
//   console.log("Data bharwa laude!");
// }

// setTimeout(ans2,3000)



