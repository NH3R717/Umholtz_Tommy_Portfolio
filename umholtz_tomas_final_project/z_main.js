// Call user name functions – if else statement

userNamePrompt();

// Call protesterType instance of choiceClass – protesterType instance inherits properties from choiceClass (class/object)

var protesterChoice = new ChoiceClass("If you will be protesting choose which type of protester you will be:\n\na. non forceful \nb. forceful \nc. not protesting", "Alright now, you have to enter some text to play this game, you didn't do that. Game over, you lose...", "You have made a valid choice.", "Skipping ahead are we, we'll just have to see what happens here.", "You have not made a valid choice. Game over, you lose...");
protesterChoice.userChoiceFunct();

//save input variable as a new variable for use in "nonforcefulPolice" function
var forRandom = input;

//
class Location extends ChoiceClass {
    constructor() {
        super("Where will you be doing your protesting at? These are the popular locations: Wan Chai, Tsuen Wan, any MRT station, any police station, Sham Shui Po.", "Alright now, you have to enter some text to play this game, you didn't do that. Game over, you lose...", "opps that's a selection for the last prompt, what happens next??.", "You have made a valid choice.", "That's not on the list, you won't cause much effect by showing up there your game is over.", )    
    }
}
//
var protestLocation = new Location();

//
function protesterDirection(){
    // Bypass equipment choices/send to policeAffects object
    if (input === 'a'){
        protestLocation.userChoiceFunct();
    // Call for loop showing user their equipment choices – implementation of 'for loop'
    }else if(input === 'b'){
        equipmentLoop();
        protestLocation.userChoiceFunct();
    // 
    }else{
        alert("Not protesting, game is finished") + Environment.Exit(0);
    }
    //var input = inputForRandom;
};
//
protesterDirection();

//
nonforcefulPolice();

// // End game

alert("End of game message.")

// // Inheritance call choice class

// // Poly with super class of above choice class

// // Getter and Setter?

// // array with a loop iteration

// // ** Implement an interface – Use of prompt and alerts?

// // ** File I/O with html and .js documents?

//working @ 10:35:34 HKT