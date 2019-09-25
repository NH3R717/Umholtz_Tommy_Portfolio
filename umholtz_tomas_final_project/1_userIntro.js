function userNamePrompt() {
    
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
    alert ("That's not a name. Game over, you lose...") + close;
    } else {
    alert ("Alright \"" + person + "\"! You at least entered some text when prompted, looks like you can handle what's next.");
    }
};