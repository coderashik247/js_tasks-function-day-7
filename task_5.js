/*

Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/


function odd_even(number){
    if(number % 2 === 0){
        const letter = "Even";
        return letter;
    }
    else{
        const letter = "Odd";
        return letter;
    }

}

console.log(odd_even(8))