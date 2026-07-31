// const obj={
//    a:10,
//    b:55,
//    c:30,
// d:55,
// e:26
// }

// // console.log(obj["a"])

// const {a}=obj

// console.log(a)

// const{b:cat}=obj

// // console.log(cat)

// // console.log(b)
// // //will throw error

// //taking multiple values from obj

// let {c}=obj

// let {d,e}=obj

// console.log(d,e)

// let {c:bat}=obj

// console.log(bat)

// console.log(obj)


//ways of declaring json :
//1 Pretty Printed JSON json
const json0={
   "name":"Brahamjeet",
   "age":34,
   "gender":"male",


};



//2 json string
const json1 = '{"name":"Brahamjeet","age":25,"isStudent":false}';


//3 json array 
const json2=[

   {
      "name":"Rahul",
      "Gender":"Male",
      "city":"Varanasi"
   }
,
   {
      "name":"Jitesh",
      "Gender":"Male",
      "city":"Jaipur,"
   }
,
   {
      "name":"Shreya",
      "Gender":"Female",
      "city":"Noida",
   }
];

//4 nested json

const json3={
   "name":{
      "name1":"Rupesh",
      "name2":"Suresh",
      "name3":"Rajesh",
         },
   "city":"Banaras",
   "ID":{
      "ID1":"X123",
      "ID2":"XC3F2"
   }      
     
};

//Stringy fy and parse

//while sending data across networks data the json data is stringyfied ->recieved by server -> parsed   

console.log(typeof json1)

console.log(typeof json0)


console.log(typeof json2)

console.log(typeof json3)

let json10=JSON.stringify(json1)

console.log(typeof json10)
console.log(json1)

let json11=JSON.parse(json10)


console.log(typeof json11)
console.log(json11)

console.log(typeof json0)
let json20=JSON.stringify(json0)

console.log(typeof json20)

console.log(json20)

let json21=JSON.parse(json20)


console.log(json21)

