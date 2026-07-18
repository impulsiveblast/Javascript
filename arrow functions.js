const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

const sub=((a, b) => console.log(a - b));
//single expression so its allowed 

//return is a statement so its not allowed inside arrow function

sub(4,2);