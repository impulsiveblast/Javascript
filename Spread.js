let arr1=[1,2,3,4]

let arr2

arr2=arr1  //arr1 got copied on arr2 with both arr2 and arr1 pointing on same set of data 

// console.log(arr2)

arr2.push(7)
arr2.push(6)

arr2.push(33)

// console.log(arr1)

let arr3=[...arr1]

// console.log(arr3)

arr3.push(26)

// console.log(arr1)

// console.log(arr3)  //using spread operator only values got copied and arr3 and arr1 are seperate objects 

const obj={
  a:"Ashish",
  b:"Aman",
  c:"Hardeep",
  d:"Pushpesh"
}

const obj2=obj   //obj copied into obj2 and both obj2 and obj pointing same dataset
 

// console.log(obj2.a)

obj.k="Brahamjeet"

// console.log(obj2.k)

const obj3={    //copied by passing only values obj3 and obj donot share values both became separate objects
  ...obj
}

console.log(obj3)

obj3.m="Anish"

console.log(obj3)

//rest is just reverse of spread operator

//spread->separate the given elements

//rest->pack the separated elements together same syntax as spread i.e ...

arr5=[1,4,6,7]

function add(...arr){     //we are assuming its spread verson of an array arr
 
  console.log(arr)   //we are doing reverse spread i.e rest and printing that array
}

add(1,4,3,6)

function add2(a,b,c,...arr){   //it will assume ...arr to be separated form of arr array

  console.log(a)
  console.log(b)
  console.log(arr)

}

add2(1,2,4,5,6,7)
