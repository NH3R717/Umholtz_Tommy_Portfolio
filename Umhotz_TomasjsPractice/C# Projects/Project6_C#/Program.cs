using System;

namespace ArraryVariables
{
	class MainClass
	{
		public static void Main (string[] args)

		{
			//Arrays are signified by []
			//datatype arrayName = new datatype[size of the array];

			//Create the arrary - Declare the array
			int [] bills = new int[3];

			//Fill the arrary - defining the arrary
			//arraryName[index#] = value;
			//Index # always start with zero!
			bills[0] = 230;
			bills [1] = 360;
			bills [2] = 5700;

			Console.WriteLine ("The water bill for this month is $"+ bills [1]);
			Console.WriteLine ("The the electric was $"+ bills [0]);
			int totalBills = bills [0] + bills [1] + bills [2];
			Console.WriteLine ("The total bills for the month is $"+totalBills);

			//Declare and Define an array in one step
			//data = [] arrary arrayName = new string[] {value1. value2, value3, etc)
			string [] fruits = new string[]{"apple","pear","banana","grapes"};
		
			Console.WriteLine (fruits[2]);
			Console.WriteLine (fruits[1]);
			Console.WriteLine (fruits[0]);

			//To find the numbers of variables in an arrary
			//length properties
			//dotsyntax - "use a period"
			Console.WriteLine(fruits.Length);

			//change any value inside an arrary
			//once changed it stays changed

			//variable name = new value
			fruits[0] = "kiwi";

			Console.WriteLine (fruits[0]);


		}
	}
}
