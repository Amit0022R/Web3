use rand::Rng; use core::num;
// use for generating random numbers
use std::cmp::Ordering;
use std::io; // use for input/output operations // use for comparing values

// fn main() {
//     println!("Guess the number!");

//     println!("Please input your guess.");

//     let mut guess = String::new(); // create a new string to hold the input

//     // guess.push_str("AMit Ranga");

//     io::stdin() // get the standard input
//     .read_line(&mut guess) // read a line into the mutable string
//     .expect("Failed to read line"); // handle any errors

// println!("You guessed: {}", guess.trim()); // print the trimmed guess
// }

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);
    // generate a random number between 1 and 100
    // The `gen_range` function is inclusive of the lower bound and exclusive of the upper bound.
    // In this case, we use `1..=100` to include both 1 and 100 in the range.
    // The `thread_rng` function provides a random number generator that is local to the current thread.
    // This is useful for generating random numbers in a thread-safe manner.
    // println!("The secret number is: {}", secret_number); // print the secret number (for testing purposes)

    loop {
        println!("Please input your guess.");

        let mut guess = String::new(); // create a new string to hold the input

        // guess.push_str("AMit Ranga");

        io::stdin() // get the standard input
            .read_line(&mut guess) // read a line into the mutable string
            .expect("Failed to read line"); // handle any errors

        // let guess: u32 = guess.trim().parse().expect("Failed to parse!");
        
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number.");
                continue; // skip the rest of the loop and prompt for input again
            },
        };

        // match is like a switch statement in other languages
        // it allows you to compare a value against a series of patterns
        match guess.cmp(&secret_number) {
            // compare the guess with the secret number
            Ordering::Equal => {
                println!("You guessed it!");
                break; // exit the loop if the guess is correct 
            },
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
        }
    }
}
