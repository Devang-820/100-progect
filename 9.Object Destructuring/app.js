const userPerson1 = {name:"john Doe",age:30,gender:"male",country:"usa" }

const {name,age,country} = userPerson1
console.log(name,age,country);

console.clear();



const num ={ x:100, y:200}
const {x: new1,y:new2} = num 
console.log(new1);
console.log(new2);
console.clear();
//Object Destructuring & Rest Operator

let {a,b,...rest} = {a: 100,b:200,c:300,d:400,e:500}

console.log(a);
console.log(b);
console.log(rest);

console.clear();



const userPerson2 ={name:"jone",age:20,gender:"male",counter:"India",};
const {name: personName,age:personAge,gender:personGender,counter:personCounter} =  userPerson2
console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(personCounter);



