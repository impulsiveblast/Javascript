let res = 5 + 3;


async function data() {
  let res2 = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

  console.log( res2);
}


data();


console.log(res);

//building my own  promises

