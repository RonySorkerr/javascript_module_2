// free drinks

const Price = 550;
if(Price > 500){
    console.log('You have a free coke');
}
else{
    console.log('You have to buy your coke. It worths 30 tk')
}

// BMI CALCULATOR
const weight = 100;
const height = 120;
const BMI = weight / height ** 2;
console.log(BMI);
if(BMI < 18.5){
    console.log('you are underweight');
}
else if(BMI >= 18.5 || BMI <= 24.9){
    console.log('You are normarl');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('You are overweight');
}
else{
    console.log('You are obese');
}

// GRADE CALCULATOR
const marks = 50;
if(marks > 90){
    console.log('A');
}
else if(marks > 80){
    console.log('B');
}
else if(marks > 70){
    console.log('C');
}
else if(marks > 60){
    console.log('D');
}
else{
    console.log('F');
}


// FRIEND CIRCLE
const myMarks = 80;
const fMarks = 65;
if(myMarks >= 80){
    if(fMarks > 80){
        console.log('We are going on a lunch');
    }
    else{
        if(fMarks > 60){
            console.log('Better luck Next time');
        }
        else{
            if(fMarks > 40){
                console.log('Unread');
            }
            else{
                if(fMarks<40){
                    console.log('You are unfriend.');
                }
            }
        }
    }
}
else{
    console.log('I am home and sad');
}

// TERNARY 
const num1 = 12;
const num2 = 13;
var result = num1 + num2;
if(num1 > num2){
    console.log(num1 * 2);
}
else{
    console.log(result);
}

result =  num1 > num2 ? num1 * 2 : result;
console.log(result);