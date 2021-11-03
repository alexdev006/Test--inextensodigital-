// [Algo] Fizzbuzz
// Instructions

// This is the very classical Fizz Buzz.
// Subject

// Display numbers between 1 and N by following the rules:

//     if number can be divided by 3: display Fizz ;
//     if number can be divided by 5: display Buzz ;
//     if number can be divided by 3 AND 5 : display FizzBuzz ;
//     else: display the number.

// Guidelines

//     Write it in your favorite language (one of: javascript, php)
//     Push your code to a Github repository or any sandbox environment like codesandbox
//     Get ready to justify some of your choices for the interview

// Evaluation

//     Quality of the code
//     Scalability of the algorithm
//     Usage of good practices and modern programming language features

const fizzBuzzFunction = () => {
  for (let numb = 1; numb <= 30; numb++) {
    if (numb % 15 === 0) {
      console.log("**FizzBuzz**");
    } else if (numb % 3 === 0) {
      console.log("**Fizz**");
    } else if (numb % 5 === 0) {
      console.log("**Buzz**");
    } else {
      console.log(numb);
    }
  }
};
console.log(fizzBuzzFunction());
