// async function Hello(){

//    setTimeout(()=>{
//     console.log("My name is Brahamjeet")
//    },2000)
// }

// Hello()

// console.log("I will execute first")

//FETCH API

// async function Demo_Fetch(){
//   let ans=fetch("https://pokeapi.co/api/v2/pokemon/ditto");

//   console.log(ans);

// }

// Demo_Fetch();

// let ans=fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>{
//   console.log(res)
// })

// console.log(ans)

// async function Wave() {

//   let data= await fetch("https://pokeapi.co/api/v2/pokemon/ditto")

//   let ans=(await data.json())

//   console.log(ans)

// }

// Wave();

let ans = fetch("https://pokeapi.co/api/v2/pokemon/gooner")
  .then((res) => {
    console.log(res.ok)
  })
  .catch((rej) => {
    console.log(rej);
  });
