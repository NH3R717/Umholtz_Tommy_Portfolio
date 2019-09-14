// compaire 2 true or false values
			// compaire relational epressions with results as a t/f

			//can we buy an iphone


			// decimal budget = 400.00m;
			// decimal iphoneCost = 500.00m;
			// decimal paycheck = 600.00m;
			
			var iphoneCost = prompt("How much does the phone cost?");
			var budget = prompt("What's your budget for the month?");
			var paycheck = prompt("What will your pay be this week?");

			// && AND Operator only both sides need to be true
			if ((iphoneCost < budget) && (paycheck > 700)) {
				//We can get the iphone
				console.log ("You can get the phone.");


			}else{
				console.log ("Sorry you can't buy the phone.");

			}

			// || OR operator at least one side needs to be true, for the statement to be true

			if ((iphoneCost < budget) || (paycheck > 700)) {
				//We can get the phone
				console.log ("You can get the phone in the OR case.");


			}else{
				console.log ("Sorry you can't buy the phone, can't buy in the OR case.");

			}
		
			// ! NOT operator

			if ( !(iphoneCost > budget) ){
				//We can get the phone
				console.log ("You can get the phone in the NOT case.");


			}else{
				console.log ("Sorry you can't buy the phone, can't buy in the NOT case.");

			}

			//example multiple conditions

			// if(5 == 6||(4==5 && 5 == 5))
			//first (4==4 && 5 == 5) - True && True = True
			//seconf 5==6 || True - False || True = True
			//=True 

			//a,b,c = 4
			//a==b && b==c
			//True