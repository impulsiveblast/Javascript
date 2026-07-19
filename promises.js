// let res = 5 + 3;

// async function data() {
//   let res2 = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

//   console.log( res2);
// }

// data();

// console.log(res);

//building my own  promises

let ans = new Promise((res, rej) => {
  console.log("Hi Brother");
});

// ans();

ans;

//SetTimeout

let ans2 = new Promise(() => {

  function hello() {
    console.log("Hello my name is gyan");
  }
 

   
 setTimeout(hello,1)
})

// undertanding then and catch

let ans3=new Promise((resolve,reject)=>{

  let a=2

  if(a>=2)
  {
    resolve("Its a positive number")    //end up in fullfilled state as it satisfies condition of resolve
  }
  else if(a<0)
  {
    reject("Its a negative number")
  }

})

ans3.then((message)=>{
  console.log("The status of promise is currently: "+message)

  return "positive number is 2"
}).catch((error)=>{
   console.log("The error message of the program is :"+ error);
}).then((message)=>{
  console.log("Second message is: "+message);
}).finally((message)=>{
  console.log("I will run in every condition")})


  let promise1=new Promise((resp,rej)=>{
   setTimeout(resp,2000,"1st pass")
})

  let promise2=new Promise((resp,rej)=>{
    setTimeout(resp,2000,"2nd pass")
})

  let promise3=new Promise((resp,rej)=>{
    setTimeout(resp,3000,"3rd pass")
  })

  Promise.all([promise1,promise2,promise3]).then((msg)=>{
    console.log(msg);
  })

