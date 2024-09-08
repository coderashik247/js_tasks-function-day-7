/* 

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/


function make_avg(numbers){
    const size = numbers.length;
    let sum = 0;

    for(const num of numbers){
        sum = sum +num;
    }
    const avg = sum /size;

    return avg;

}

const result = make_avg([1,2,3,4,5])

console.log(result);

