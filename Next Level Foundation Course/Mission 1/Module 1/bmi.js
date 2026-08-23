// input from terminal

/*

const weight = process.argv[2];
const height= process.argv[3];
console.log(weight,height);
*/


const weight = process.argv[2];
const height= process.argv[3];

function calculateBmi(weight,height){

    const bmi= weight/ (height*height);
    return bmi;
}

console.log(calculateBmi(weight,height));

// Assignment: BMI based calculator , according to WHO depending on BMI if a person is overweight, fit or under weight. 