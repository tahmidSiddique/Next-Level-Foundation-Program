// Js Scope--> Global> Local > Function > Block

/*/ Global Scope

let age; // ------> Global Scope

function sayAge(){

    age =21;
} //-----Function Scope

sayAge();

console.log(age);

*/

/*
{
    let age; // ------> Block Scope
}

function sayAge(){

    age =21;
} //-----Function Scope

sayAge();

console.log(age);

*/

/*

{
    let age; // ------> Block Scope
}
console.log(age);  // ------> Global Scope */

/*
{
    let age; // ------> Block Scope
}

function sayAge(){

    age =21;
} //-----Function Scope

sayAge(); // calling function to global scope

console.log(age);//------> Global Scope

*/

let age=21;//-----Global scope
{
    console.log(age); //------> block scope
}
