function add(a,b){

  return a+b;
}



console.log(add(6,4));

function add_display(a,b,cb){   //high order function created

  console.log(a+b);

  console.log(cb(a,b));
}


add_display(5,3,(x,y)=>{   ////high order function executed
 
  return x+y;
})



function add2(a,b,cb){    //returned a funtion alongwith taking a function as an argument
  
  var res=a+b;

  return ()=>(console.log(res));

}



add_num=add2(5,1000,()=>{});


add_num();