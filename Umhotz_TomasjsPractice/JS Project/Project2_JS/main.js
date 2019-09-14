//Zombie Madness OMG :O

			//Start with one zombie
			//One zombie infects 4 people per day
			//How many in 8 days?

			// int zombies = 1;
			var zombies =1;
			// int bites = 4;
			var bites = 4;
			// int days = 8;
			var days = 8;


			// for (int n = 1; n <= days; n++) {
			for (var n = 1; n <= days; n++) {

				// int newZoms = zombies * bites;
				var newZoms = zombies * bites;

				//zombies += newZoms;
				zombies += newZoms;


			// 	Console.WriteLine ("On day {0}, there is/are {1} zombie(s).", n, zombies);
			//}
				console.log ("On day " days, "there is/are " zombies, "zombie(s).");
			}

			// // How long to wipe out the US?

			// int numDays = 1;
			var numDays = 1;

			// int horde = 1;
			var horde = 1;

			// while (horde <= 320000000) {
			while (horde <= 320000000) {

				// int infected = horde * bites;
				// horde += infected;
				var infected = horde * bites;
				horde += infected;

				// console.WriteLine ("Day number {0}, {1} zombies", numDays, horde);
				// numDays++;
				console.log ("Day number {0}, {1} zombies", numDays, horde);
				numDays++;