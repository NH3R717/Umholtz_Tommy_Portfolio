using System;

namespace Expression_Worksheet
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			//**Expressions Assignment** 10_01 Expressions Worksheet


			/* 			Name: Tommy Umholtz 			Date: 12/01/15 			Section: 01 			*/


			//Calculate how many slices of pizza party goers will get with a given amount of attendees and pizzas

			//declare and define variables for given
			float wholePizzas = 7f;
			float slicesOfPizzasPerWhole = 8f;
			float numberOfPartyGoers = 6f;


			//create the variables for actual slices of pizza per attendee
			//declare and define variable for pizza slice average per party goer
			float slicesPerAttendee = wholePizzas*slicesOfPizzasPerWhole/numberOfPartyGoers;

			//answer
			Console.WriteLine("Each party goer will recieve " +slicesPerAttendee+ " slices of pizza." );
			

		}
	}
}
