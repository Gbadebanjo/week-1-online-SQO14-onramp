function fizzBuzz(input){
    if (input % 3 === 0 && input % 5 === 0) {
        return "fizzbuss";
    }   else if (input % 5 === 0) {
    return "buzz";
    }   else  if (input % 3 === 0) {
        return "fizz";
    }   else {
    return input;
    }
}


module.exports = fizzBuzz
console.log(fizzBuzz(7));


// challenge solved