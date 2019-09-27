//instantiate class "DayActivities"
class DayActivities {
//instantiate constructor method with parameters and global variables
  constructor(wakeUp, workStudy, leisure, sleep) {
    this.wakeUp = wakeUp;
    this.workStudy = workStudy;
    this.leisure = leisure;
    this.sleep = sleep;
  }
  
  //declaration of main class method
  today() {
    alert(`I woke up at ${this.wakeUp} today, spent ${this.workStudy} hours working or studying and my leasure activity was ${this.leisure}. The time I went to was sleep at ${this.sleep}.`);
  }

//declare instance of DayActivities class as monday variable
  var monday = new DayActivities ("5:00", 8, "3 hours of fitness (gym, swimming, sauna", "22:00");
//call instance of DayActivities as monday
  monday.today();

//instantiate DayTrip subclass, call function of parent object (DayActivities) 
//using the super keyword from child class (DayTrip)
class DayTrip extends DayActivities {
  constructor() {
    super("6:00", 0, "a day trip into the city – lunch, some drinks by the ocean, watching a horse race, followed by dinner in Wan Chai", "01:00")
  }
}

//declare instance of DayTrip class as dayTripHappyValley variable
  var dayTripHappyValley = new DayTrip();
//call instance of DayTrip as dayTripHappyValley 
  dayTripHappyValley.today();
