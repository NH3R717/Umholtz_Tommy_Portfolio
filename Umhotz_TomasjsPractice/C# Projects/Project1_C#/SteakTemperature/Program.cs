using System;

namespace SteakTemperature
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			/*
			 * Tommy Umholtz
			 * 09/12/19
			 * Steak Temperature
			 * section 01
			*/

			//Determine what cook temp our steak is for a certain temperature

			/*
			 * rare - 130-140
			 * medium rare 140-145
			 * medium 145-160
			 * well done 160-170
			*/

			//Ask the user for temperature of their steak
			Console.WriteLine ("We are going to determin the Steak Doneness level. \r\nWhat is the temperature of your steak in degrees F, please press enter when done.");

			//capture the user response and store it in a variable
			string steakTempString = Console.ReadLine ();

			//convert to a number
			int steakTemp = int.Parse (steakTempString);

			//start our conditional

			if (steakTemp < 130) {

				Console.WriteLine ("This is uncooked meat");

			} else if (steakTemp < 140) {

				Console.WriteLine ("The steak is rare.");

			} else if (steakTemp < 145) {

				Console.WriteLine ("This steak is medium rare");

			} else if (steakTemp < 160) {

				Console.WriteLine ("The steak is medium.");

			} else if (steakTemp < 170) {

				Console.WriteLine ("The steak is well done.");

			} else {

				Console.WriteLine ("The steak is burnt. Feed it to the dog.");

			}


		}
	}
}
