// Assignment: BMI based calculator , according to WHO depending on BMI if a person is overweight, fit or under weight. 


const weight = process.argv[2];
const height= process.argv[3];

function calculateBmi(weight,height){

    const bmi= weight/ (height*height);
    return bmi;
}

console.log(calculateBmi(weight,height));

if (calculateBmi<18.5){
    console.log("Underweignt");

}else if (calculateBmi>=18.5 || calculateBmi<=24.9 ){

    console.log("Fit");

}else if (calculateBmi=>25.0){

    console.log("Overweight");
    
}