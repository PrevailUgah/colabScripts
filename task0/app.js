// 1. Function Declaration & 2. Parameters (name, score)
function checkResult(name, score) {

   // 3. Conditional Statement (if/else)
   if (score >= 50) {
      // 4. Return Statement (pass message)
      return name + " scored " + score + " and has PASSED ";
   } else {
      // 4. Return Statement (fail message)
      return name + " scored " + score + " and has FAILED ";
   }

}

// 5. Invocation — calling the function with Arguments
// 6. Storing the returned value in a variable
let result1 = checkResult("Alice", 75);
let result2 = checkResult("Bob", 40);
let result3 = checkResult("Carol", 50);

// 7. Display the result
console.log(result1);
console.log(result2);
console.log(result3);