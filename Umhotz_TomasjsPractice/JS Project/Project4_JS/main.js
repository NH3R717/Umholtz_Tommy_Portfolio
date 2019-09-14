
			//Calculate how many slices of pizza party goers will get with a given amount of attendees and pizzas

			//declare and define variables for given
			let wholePizzas = prompt("How many whole pizzas?");
			let slicesOfPizzasPerWhole = prompt("How many slices per pizza?");
			let numberOfPartyGoers = prompt("People at the party.");


			//create the variables for actual slices of pizza per attendee
			//declare and define variable for pizza slice average per party goer
			var slicesPerAttendee = (wholePizzas * slicesOfPizzasPerWhole / numberOfPartyGoers);

			//answer
			console.log("Each party goer will recieve " +slicesPerAttendee+ " slices of pizza." );