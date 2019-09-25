class ChoiceClass{

  constructor(promptOne, alertOne, alertTwo, alertThree, choice) {
    this.promptOne = promptOne;
    // this.PromptTwo = PromptTwo;
    // this.PromptTwo = PromptTwo;
    // this.input = input;
    this.alertOne = alertOne;
    this.alertTwo = alertTwo;
    this.alertThree = alertThree;
    this.choice = choice;
    }

    userChoiceFunct(){
      input = prompt(this.promptOne)
      if (input === null || input === "") {
        alert (this.alertOne);

      //Im sure there is a more efficent way to do this, but this is what I know right now to get the job done.
      } else if (input === "a" || input === "b" || input === "c") {
        alert (this.alertTwo);
        //protesterDirection();
      } 
      // Wan Chai, Tsuen Wan, any MRT station, any police station, Causeway Bay
      else if (input === "Wan Chai" || input === "Tsuen Wan" || input === "any MRT station" || input === "any police station" || input === "Sham Shui Po") {
      alert (this.alertThree);
      }
      //dq above choice for equipment
      else { 
        alert (this.alertThree) + Environment.Exit(0);
    }     
  }
};