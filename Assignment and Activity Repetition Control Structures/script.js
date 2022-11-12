console.log("connected");


//ACTIVITY 1

//Prompt a user to enter a number.
let number = prompt ("Give me a number");

for (number; number >= 0; number--)
{
   

    if (number < 50){
        console.log(`Currently at number ${number}. Terminating the loop`);
        break; 
    }

    // if (number % 10 === 0)
    // {
    //     console.log(`The number is divisible by 10. Skipping the number`);
    //     continue;
    // }


    if (number % 5 === 0)
    {
        console.log(number);
    }

}


//ACTIVITY 2

//Prompt a user to enter a number.
// let number = prompt ("Give me a number");

// for (number; number >= 0; number--)
// {
   

//     if (number < 50){
//         console.log(`Currently at number ${number}. Terminating the loop`);
//         break; 
//     }

    // if (number % 10 === 0)
    // {
    //     console.log(`The number is divisible by 10. Skipping the number`);
    //     continue;
    // }


//     if (number % 5 === 0)
//     {
//         console.log(number);
//     }

// }  