using System;

namespace Logical_Operators
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			// compaire 2 true or false values
			// compaire relational epressions with results as a t/f

			//can we buy an iphone

			decimal budget = 400.00m;
			decimal iphoneCost = 500.00m;

			decimal paycheck = 600.00m;

			// && AND Operator only both sides need to be true
			if (iphoneCost < budget && paycheck > 700m) {
				//We can get the iphone
				Console.WriteLine ("You can get the phone.");


			}else{
				Console.WriteLine ("Sorry you can't buy the phone.");

			}

			// || OR operator at least one side needs to be true, for the statement to be true

			if (iphoneCost < budget || paycheck > 700m) {
				//We can get the iphone
				Console.WriteLine ("You can get the phone in the OR case.");


			}else{
				Console.WriteLine ("Sorry you can't buy the phone, cant buy in the OR case.");

			}
		
			// ! NOT operator

			if ( !(iphoneCost > budget) ){
				//We can get the iphone
				Console.WriteLine ("You can get the phone in the NOT case.");


			}else{
				Console.WriteLine ("Sorry you can't buy the phone, cant buy in the NOT case.");

			}

			//example multiple conditions

			// if(5 == 6||(4==5 && 5 == 5))
			//first (4==4 && 5 == 5) - True && True = True
			//seconf 5==6 || True - False || True = True
			//=True 

			//a,b,c = 4
			//a==b && b==c
			//True

		}
	}
}
