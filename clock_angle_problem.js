/*
	Question: given a time in the format of hour andd minutes, calculate the angle of the hour and
	minute hand on a clock.

	Solution: 
		To solve this do the following: 
		1) Calculate the angle made by hour hand with respect to 12:00 in h hours and m minutes. 
		2) Calculate the angle made by minute hand with respect to 12:00 in h hours and m minutes. 
		3) The difference between two angles is the angle between two hands.

		The formula for 1) is: (hour * 60 + minute) * 0.5, since it takes the hour hand 12 hours to
		move 360 degrees.

		The formula for 2) is (hour * 60 + minute) * 6, since it takes the minute hand 60 minutes to
		move 360 degrees. But the hour hand equates to 0 here because we are concerned with minutes.

		The formula then equates to (0 * 60 + minute) * 6
		=> minutes * 6
*/

function clock_angle_problem(hour, minute)
{
	if(hour > 12 || hour < 0 || minute > 60 || minute < 0)
	{
		console.warn('Invalid Input! Check your parameters!')
	}

	if(hour == 12)
	{
		hour = 0
	}

	if(minute == 60)
	{
		minute = 0
		hour += 1

		if(hour > 12) hour -= 12
	}

	hour_angle = (hour * 60 + minute) * 0.5
	minute_angle =  minute * 6

	let angle = Math.abs(hour_angle - minute_angle)

	return Math.min(360 - angle, angle)
}

//usage
//check_angle_problem(10, 45)