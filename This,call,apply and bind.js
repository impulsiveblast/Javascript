//via coder army

// console.log(globalThis);

//to greet a user
function greet()
{
  console.log(`Hi ${this.Name}`)
}

//to increase age of user

function inc(val){
  this.age=this.age+val;

  console.log(this.Age);
}

// const user={
//   name:"Brahamjeet",
//   age:26,
//   height:167,
//   Hello :function(){
//     console.log(this.name)
//   }

// }

// // user.salutation();

// const user2={
//   name:"Mohit"
// }



// user2.Hello=user.Hello

// user2.Hello()


// greet();   //points to global object in non strict mode

const us1={
  Name: "Akash",
  Age:22
}

const us2={
  Name: "Aman",
  Age:26
}

greet.call(us1)

greet.call(us2)



inc.call(us1,5)

inc.call(us2,2)