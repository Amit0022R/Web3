// fn main() {
//     // let age = 20;
//     // age = 30;
//      // This line will cause a compilation error because `age` is immutable by default.

//     let mut age = 20; // Declare a mutable variable
//     age = 30; // Now we can change the value of `age`

//     println!("You are {} years old.", age);
// }

// fn main() {
//     let mut age = 17;
//     age = 19;
//     println!("Your age is: {}", age-1);
// }

// fn main() {
//     let a = true;

//     match a {
//         true => println!("It's true!"),
//         false => println!("It's false!"),
//     }
// }


// fn is keyword so cannot use it as a variable name
// fn main() {
//     let mut  age = 32;
//     println!("You are {} years old.", age);
//     age = 33; // This line will cause a compilation error because `age` is immutable by default.
//     println!("You are now {} years old.", age);
// }

fn main() {
    let mut  age = 32;
    println!("You are {} years old.", age);
    age = 33; // This line will cause a compilation error because `age` is immutable by default.
    println!("You are now {} years old.", age);
    let age = 34; // This line will not cause an error because we are shadowing the variable
    println!("You are now {} years old.", age);

    
}




