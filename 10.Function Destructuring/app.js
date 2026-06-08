const person = {
    name: 'devang',
    age: 22,
    country: "india",
}

function printPersonInfo({name,age,country}) {
    console.log(`Name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`country:${country}`);
      
}
printPersonInfo(person)

console.clear()

let options ={
    title: "my menu",
    items:['item1','item2'],

}

function showMenu({title,
                    width:w=100,
                    height:h=200,
                    items:[item1,item2]}) 
{
 console.log(`${title}${w}${h}`);
 console.log(item1);
 console.log(item2);  
}
showMenu(options)