// let a=parseInt(prompt("Enter num1"));
// let b = parseInt(prompt("Enter num1"));
// let c = parseInt(prompt("Enter num1"));

// console.log(a**b) // 1000

// compare 3 different number for largest

// console.log("a, b, c: " + a + " " + b + " " + c)

// if(a > b){
//     if(b>c){
//         console.log("a is largest")
//     }
//     else{
//         console.log("c is largest")
//     }
// }else if(b>c){
//     console.log("b is largest")
// }else{
//     console.log("c is largest")
// }

// if(a > b && a > c ) 
//     console.log("a is largest")
//  else if(b> a && b > c )
//     console.log("b is largest")
// else if(c > a && c > b)
//     console.log("c is largest")
// else{
//     console.log("invalid Input")
// }

// let age = 20 ;
//  let hasId= true;
//  if(age >= 18){
//     if(hasId){
//         console.log("entry allowed")
//     }
//     else {
//         console.log("ID is required")
//     }
//  }else{
//     console.group("Entry not allowed")
//  }


// let num1 = 5;
// let num2 = 6;

// console.log(num1 <= num2? num1 == num1? "both are equals": "num is smaller" : num1==num2? "both are equal " : "num2 is smaller");



// ATM : ask the user to select

// console.log("choose option to select " );
// console.log("1.Check balance")
// console.log("2.Deposit money")
// console.log("3.Withdraw Money")
// console.log("4.Exit")

// let option = parseInt(prompt("Enter option to select "))


// let selectedOption = option === 1 ? "1.Check balance":
//     option === 2? "2.Deposit money":
//     option ===3?"3.Withdraw Money": 
//     option === 4 ? "4.Exit": "invalid option selected";

// console.log(selectedOption);


// let balance = 10000;
// let choice  = parseInt(prompt("Choose option to select \n1." ))


// while loop 

let i = 10 ;

while(i <= 100){
    console.log(i);
    i+=10;
}

i = 105;
while( i>= 7){
    console.log(i)
    i -= 7;
}

i = 1;
let sum =0;

while( i <= 10){
    sum += i;
    i++
}
console.log("sum " + sum)
