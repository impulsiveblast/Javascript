// function action() {
//   let ans = document.getElementById("i1");

//   ans.innerText = "You have been hacked";
// }

// let ans1 = document.getElementById("i1");

// function action2() {
//   let ans = document.getElementById("i1");

//   ans.innerText = "Hello learners!! welcome";
// }

// ans1.style.color="blue"

// let ans2 = document.getElementById("i2");

// ans2.style.backgroundColor="yellow"

// let ans3 = document.getElementById("i3");

// ans3.addEventListener('mouseenter',()=>{
//   ans3.innerText="Hack hogea"
// })

let pt = document.getElementById("parent");
let ans = pt.children;


for (let l = 0; l < ans.length; l++)
{
  let pt2 = ans[l];
  
  pt2.addEventListener("click", () => {
    pt2.innerHTML = `Child no ${l+1} got hacked`
  })
}

// //change by just click on the parent
// pt.addEventListener('click',()=>{
//   let pt1=document.getElementById('child1');
// let pt2=document.getElementById('child2');
// let pt3=document.getElementById('child3');
// let pt4=document.getElementById('child4');
// var t=0;
// t++;
// pt1.innerHTML=`child ${t} got Hacked`
// t++;
// pt2.innerHTML=`child ${t} got Hacked`
// t++;
// pt3.innerHTML=`child ${t} got  Hacked`
// t++;
// pt4.innerHTML=`child ${t} got  Hacked`

// })
