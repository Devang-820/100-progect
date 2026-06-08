  function giveMe4(a, b, c, d) {
      console.log("a", a);       console.log("b", b);
     console.log("c", c);
     console.log("d", d);

  }
  const colors = ['red', 'blue', 'teal', 'green']

   giveMe4(...colors);

//arrays

 const strNums = [1,'two','three']
 const moreStrNums = ['four','five','six']
 const concat =[... strNums,...moreStrNums]

 console.log(concat);


 let peoples = ['dev','alex','huxn']
const allPes= ['kumar', ... peoples ,'jon'];
console.log(allPes);

 

// objects
 const obj1 ={x:1,y:2 }
 const obj2 ={z:3,k:4}

 const obj3= {...obj1,...obj2}
 console.log(obj3);
 

 let person ={
   name:"devang",
   age:22,
   gender:"male"
}
const clone ={...person,work:"programmer",location:"id" };
console.log(clone);


 console.clear()


let arr= [1,2,3];
let arr2=[,4,5];
const arr3 =[...arr,...arr2]

console.log(arr3);



let user = {
   name:"jen",
   age:22,
}
const clone2={...user,work:"it"}
console.log(clone2);
