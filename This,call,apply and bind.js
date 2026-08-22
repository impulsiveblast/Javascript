//via coder army

// console.log(globalThis);

//to greet a user
function greet()
{
  console.log(`Hi ${this.Name}`)
}



const stopwatch={
    time:0,
    
    
    start:function ()
    {
        var that=this;   //points to this of current object 
        
        const fn=()=>{
            
            setInterval(()=>{
            that.time++;     //this this is pointing to the current object its not arrow function's this hence it contains time value which is being increased here
            
            console.log(that.time);
        },1000)
        
            
        }
        
        fn();
    }
    
    
}

//clock
    const run=()=>{
        setInterval(()=>{
            const ans=new Date();
            const hr=ans.getHours();
            const min=ans.getMinutes();
            const sec=ans.getSeconds();
        console.log(`${hr}:${min}:${sec}`);
    },1000)
    }
    
    run()

stopwatch.start()
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
