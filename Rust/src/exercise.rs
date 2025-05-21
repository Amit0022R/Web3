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








