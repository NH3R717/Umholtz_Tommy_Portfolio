/*
			 * Tommy Umholtz (file provided by Jessica Garlic [instructor])
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
			var steakTemp = prompt ("We are going to determin the Steak Doneness level. \r\nWhat is the temperature of your steak in degrees F, please press enter when done.");

            //capture the user response and store it in a variable
            /*no need to read the users input, the promt function 
            will give the user the option to enter a value and that 
            value will be stored as "steakTemp"*/
			//string steakTemp = Console.ReadLine ();

            //convert to a number
            /* no need to parse the string in JS, it is weakly typed 
            and will treat the string as a number when necessary*/
			//int steakTemp = int.Parse (steakTempString);

			//start our conditional

			if (steakTemp < 130) {

				//console.log ("This is uncooked meat");
                console.log ("This is uncooked meat");
                
			} else if (steakTemp < 140) {

				//console.log ("The steak is rare.");
				console.log ("The steak is rare.");

			} else if (steakTemp < 145) {

				//console.log ("This steak is medium rare");
				console.log ("This steak is medium rare");

			} else if (steakTemp < 160) {

				//console.log ("The steak is medium.");
				console.log ("The steak is medium.");

			} else if (steakTemp < 170) {

				//console.log ("The steak is medium.");
				console.log ("The steak is medium.");

			} else {

                //console.log ("The steak is burnt. Feed it to the dog.");
                console.log ("The steak is burnt. Feed it to the dog.");
            }