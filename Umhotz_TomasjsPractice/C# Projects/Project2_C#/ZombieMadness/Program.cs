using System;

namespace ZombieMadness
{
	class MainClass
	{
		public static void Main (string[] args)
		{

			//Zombie Madness OMG :O

			//Start with one zombie
			//One zombie infects 4 people per day
			//How many in 8 days?

			int zombies = 1;
			int bites = 4;
			int days = 8;

			for (int n = 1; n <= days; n++) {

				int newZoms = zombies * bites;

				zombies += newZoms;

				Console.WriteLine ("On day {0}, there is/are {1} zombie(s).", n, zombies);
			}

			// How long to wipe out the US?

			int numDays = 1;

			int horde = 1;

			while (horde <= 320000000) {

				int infected = horde * bites;
				horde += infected;

				Console.WriteLine ("Day number {0}, {1} zombies", numDays, horde);
				numDays++;
			}

		}
	}
}
