/*

Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

*/

function givenNumber(number){
    if(number%2 === 0){
        const divide = number/2;
        return divide;
    }
    else{
        const multiply = number*2;
        return multiply;
    }
}

const result = givenNumber(5);

console.log("Result is: ",result);