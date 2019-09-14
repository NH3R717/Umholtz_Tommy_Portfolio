using System;

namespace NestingConditionals
{
	class MainClass
	{
		public static void Main (string[] args)
		{
            //Nesting Conditionals

            //Some decisions affect other decisions

            //if it is warm enough, let'g go to the beach. If not, let's see a movie.
            //if the water is warm then lets go swimming if not lets get a tan

            //create a temperature variable
            //int temp = 67;
            Console.WriteLine("What's the outside temperature?");
            string outTemp = Console.ReadLine();
            int temp = int.Parse(outTemp);

            //Create a water temperature variable
            //int waterTemp = 90; Console.WriteLine("What's the outside temperature?");
            Console.WriteLine("What's the water temperature?");
            string outWater = Console.ReadLine();
            int waterTemp = int.Parse(outWater);

            //test to see if going to the beach
            if (temp >= 85) {
				//Warm enough, let's go to the beach
				Console.WriteLine ("It is warm enough, let's go to the beach!");

				//conditional block for water temp
				if (waterTemp >= 75) {

					Console.WriteLine ("Let's go swimming!");

				} else {

					Console.WriteLine ("Water is a little cold, let's get a tan.");

				}

			} else {
				//Cold so lets go to the movies
				Console.WriteLine ("It's cold, so let's go see a movie.");
			
			}
		}
	}
}
