//Nesting Conditionals

			//Some decisions affect other decisions

			//if it is warm enough, let'g go to the beach. If not, let's see a movie.
			//if the water is warm then lets go swimming if not lets get a tan


			// //Create a water temperature variable
			// int waterTemp = 90;
			var temp = prompt("Wanna go to the beach? What's temp outside?");
			var waterTemp = prompt("We're at the beach now, what's the ocean temp?");

			// //test to see if going to the beach
			// if (temp >= 85) {
			if (temp >= 85) {
			// 	//Warm enough, let's go to the beach
			// 	Console.WriteLine ("It is warm enough, let's go to the beach!");
				console.log ("It is warm enough, let's go to the beach!");
			// 	//conditional block for water temp
			// 	if (waterTemp >= 75) {
				if (waterTemp >= 75) {

			// 	Console.WriteLine ("Let's go swimming!");
				console.log ("Let's go swimming!");

			// 	} else {	
				} else {

			// 	Console.WriteLine ("Water is a little cold, let's get a tan.");
				console.log ("Water is a little cold, let's get a tan.");

			// 	}
				}

			// } else {
			} else {
			// 	//Cold so lets go to the movies
			// 	Console.WriteLine ("It's cold, so let's go see a movie.");
				console.log ("It's cold, so let's go see a movie.");
			}