//Arrays are signified by []
			//datatype arrayName = new datatype[size of the array];

			// //Create the arrary - Declare the array
			// int [] bills = new int[3];

			// //Fill the arrary - defining the arrary
			// //arraryName[index#] = value;
			// //Index # always start with zero!
			// bills[0] = 230;
			// bills [1] = 360;
			// bills [2] = 5700;

			let bills = [230, 360, 5700];

			// Code no good.
			// var bills[0] = prompt("What's your 1st bill?");
			// let bills[1] = prompt("What's your second bill?");
			// let bills[2] = prompt("What's your 3rd bill?");


			console.log ("The water bill for this month is $"+ bills [1]);
			console.log ("The the electric was $"+ bills [0]);
			var totalBills = bills [0] + bills [1] + bills [2];
			console.log ("The total bills for the month is $"+totalBills);

			//Declare and Define an array in one step
			//data = [] arrary arrayName = new string[] {value1. value2, value3, etc)
			////string [] fruits = new string[]{"apple","pear","banana","grapes"};
		
			let fruits = [
				"durian",
				"dragon fruit",
				"jack fruit"
			  ]; 

			console.log (fruits[2]);
			console.log (fruits[1]);
			console.log (fruits[0]);

			//To find the numbers of variables in an arrary
			//length properties
			//dotsyntax - "use a period"
			console.log(fruits.length);

			//change any value inside an arrary
			//once changed it stays changed

			//variable name = new value
			fruits[0] = "kiwi";

			console.log (fruits[0]);
