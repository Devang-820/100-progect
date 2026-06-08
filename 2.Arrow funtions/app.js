//function greet(usrename) {
//    return`my naem is ;${usrename}`
//}

//greet = usrename =>`my name is : ${usrename}`;
//console.log(greet("devang"));



            
//const double = N => N * 2;
//console.log(double(2));



setTimeout(() => {
    console.log("Hello");

    setTimeout(() => {
        console.log("Hey");

        setTimeout(() => {
            console.log("Namaste");

            setTimeout(() => {
                console.log("Hi");

                setTimeout(() => {
                    console.log("Bonjour");
                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);

}, 2000);