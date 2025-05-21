// fn main() {
//     let name = "Amit"; // Immutable
//     let mut age= 20; // Mutable
//     age = age + 1; // Increment age
//     println!("Hello, {}!", name);
//     println!("You are {} years old", age);
// }


// fn main(){
//     let city = "Delhi";
//     println!("Amit lives in {}!" , city);
// }

// fn main(){
//     let mut score = 10;
//     score = score + 5;
//     println!("Your final score is {}", score);
// }

 // Shadowing means re-declaring the same variable name
// fn main() {
//     let x = 5;
//     let x = x + 1;
//     println!("The value of x is: {}", x);
// }


// ------------>> STRINGS <<------------

// fn main() {
//     let greet = "Namaste";
//     println!("{} Amit" , greet);
// }

// fn main() {
//     let greet = String::from("Namaste");
//     println!("{} Amit" , greet);
// }

// appending
// fn main(){ // Use .push() for a char, .push_str() for &str
//     let mut s = String::from("Hello");
//     s.push(' ');
//     s.push_str("AMiT");
//     println!("{}", s);
// }

// Concatenation
// fn main() {
//     let a = String::from("Super");
//     let b = "team";
//     let c = a + b;
//     println!("{}", c);  // Superteam
// }

// fn main() {
//     let a = "Super";
//     let b = "team";
//     let c = format!("{}{}", a, b);
//     println!("{}", c); // Superteam
// }

// length
// fn main() {
//     let s = "Solana";
//     println!("Length of string s is: {}" , s.len());
// }

// Accessing Characters
// .unwrap() extracts the character from the Option<char>
// fn main() {
//     let word = "Chitkara University";
//     let ch = word.chars().nth(2).unwrap();
//     println!("The character at index 2 is: {}", ch);
// }

// Loop Through String
// fn main() {
//     let s = "Rust";
//     for c in s.chars() {
//         println!("{}", c);
//     }
// }


//  String Comparison
// fn main() {
//     let a = "sol";
//     let b = "sol";
//     println!("{}", a==b);
// }

//  Slicing a String
// &s[0..5] creates a string slice from index 0 up to (but not including) index 5
// fn main() {
//     let s = "Superteam";
//     let slice = &s[0..5];
//     println!("{}", slice); // Super
// }

// if, else if, else

// fn main() {
//     let age = 18;
//     if age < 18 {
//         println!("You are a minor");
//     } else if age == 18 {
//         println!("Just became an adult!");
//     } else {
//         println!("You're an adult");
//     }
// }

// if as an expression
// fn main() {
//     let age = 17;
//     let status = if age >= 18 {"Adult"} else {"Minor"};
//     println!("Your are {}" , status);
// }

    // SWITCH CASE
// match (like switch in other languages) -> Rust doesn’t have switch, but has a more powerful version called match.

// fn main() {
//     let number = 3;
//     match number {
//         1 => println!("One"),
//         2 => println!("Two"),
//         3 => println!("Three"),
//         _ => println!("Other"), // _ is the default case
//     }
// }

// Check if a number is positive, negative or zero.

// fn main() {
//     let n = 5;
//     if n > 0 {
//         println!("Positive");
//     } else if n < 0 {
//         println!("Negative");
//     } else {
//         println!("Zero");
//     }
// }


// Use if as an expression to assign grade.

// fn main() {
//     let marks = 85;

//     let grade = if marks >= 90 {
//         "A"
//     } else if marks >= 75 {
//         "B"
//     } else if marks >= 60 {
//         "C"
//     } else {
//         "D"
//     };
//     println!("Grade: {}", grade);
// }

// Use match to check days

// fn main() {
//     let day = 5;
//     match day {
//         1 => println!("Monday"),
//         2 => println!("Tuesday"),
//         3 => println!("Wednesday"),
//         4 => println!("Thursday"),
//         5 => println!("Friday"),
//         6 => println!("Saturday"),
//         7 => println!("Sunday"),
//         _ => println!("Invalid day"),
//     }
// }


// ------------>> LOOPS <<------------

// Infinite loop (until you break)
// fn main() {
//     let mut count = 0;
//     loop {
//         count += 1;
//         println!("Count is: {}", count);

//         if count == 5 {
//             break;  // exit loop
//         }
//     }
// }


// while loop — runs while condition is true
// fn main() {
//     let mut num = 3;
//     while num > 0
//  {
//     println!("{}!", num);
//     num -= 1;
//     }   
//  }

// for loop — iterate over collections or ranges
// fn main(){
//     for i in 1..5 {
//         println!("Iteration: {}", i);
//     }
// }

// Print numbers 1 to 10 using for
// fn main(){
//     for i in 1..10 {
//         println!("Number: {}", i);
//     }
// }

// Sum of numbers 1 to 5 using while
// fn main() {
//     let mut sum = 0;
//     let mut i = 1;
//     while i <=5 {
//         sum += i;
//         i += 1;
//     }
//     println!("Sum of numbers from 1 to 5 is: {}", sum);
// }

// Use loop to print first 3 even number
// fn main() {
//     let mut count = 0;
//     let mut num = 2;
//     loop {
//         if count == 3{
//             break;
//         }
//         println!("Even number: {}", num);
//         num += 2;
//         count += 1;
//     }
// }


// --------->> Functions in Rust <<----------

// Defining and calling functions
// fn greet() {
//     println!("Hello, world!");
// }
// fn main() {
//     greet();  // call the function
// }

// Functions with parameters
// fn greet(name: &str){
//     println!("Hello, {}!", name);
    // &str is a string slice, a reference to a string.
     // in Rust, writing name: &str is necessary when you're defining function parameters.
// } 

// fn main() {
//     greet("Amit"); // Call the function with an argument
// }


// Functions with return values
// fn add(a: i32, b: i32) -> i32 {
//     return a + b;
// }
// fn main() {
//     let result = add(5, 3);
//     println!("Sum: {}", result);
// }

// Function without explicit return
// fn print_sum(a: i32, b: i32) {
//     println!("Sum is {}", a + b);
// }
// fn main() {
//     print_sum(5, 3); // Example call
// }

//  Create a function that prints your name
// fn print_name() {
//     println!("My name is Amit");
// }

// fn main() {
//     print_name();
// }

// Create a function that takes two numbers and returns their product
// fn multiply(x: i32, y: i32) -> i32 {
//     x * y
// }
// fn main() {
//     let prod = multiply(6, 7);
//     println!("Product: {}", prod);
// }


// Function to check if a number is even (returns bool)
// fn is_even(num: i32) -> bool {
//     num % 2 == 0
// }
// fn main() {
//     let number = 8;
//     if is_even(number) {
//         println!("{} is even", number);
//     } else {
//         println!("{} is odd", number);
//     }
// }




