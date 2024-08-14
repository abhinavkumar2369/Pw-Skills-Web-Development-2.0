## ➡️ Questions with Answers 📝

1. Write a function called `addNumbers` that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
   
   ```js
   console.log(addNumbers(5, 3)); // Outputs: 8

   function addNumbers(a, b) {
        return a + b;
   }
   ```



2. Write a function called `multiplyNumbers` that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.
   
   ```js
   try {
      console.log(multiplyNumbers(5, 3));
   } catch (e) {
      console.log(e.message);
   }

   const multiplyNumbers = function (a, b) {
      return a * b;
   };

   console.log(multiplyNumbers(5, 3));
   ```


   
3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the `var` keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

   ```js
   function sumNumbers(a, b) {
      console.log(result); // Outputs: undefined
      var result = a + b;
      return result;
   }

   console.log(sumNumbers(5, 3)); // Outputs: 8
   ```



4. Declare three variables, one using `let`, one using `var`, and one using `const`, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.
   
   ```js
   {
      try {
          console.log(a);
      } catch (e) {
          console.log(e.message);
      }

      let a = 10;
      console.log(a);

      console.log(b);
      var b = 20;
      console.log(b);

      try {
          console.log(c);
      } catch (e) {
          console.log(e.message);
      }

      const c = 30;
      console.log(c);
   }
   ```



5. Declare a variable using `let` inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

    ```js
    {
        try {
            console.log(x);
        } catch (e) {
            console.log(e.message);
        }
    
        let x = 5;
        console.log(x);
   }
   ```
