/**
*	Question:
*
*		You are given an array of integers. 
*		Return the largest product that can be made by multiplying any 3 integers in the array.
*
*
*
*	This solution is in Logarithmic time (n Log n) and constant space O(1).
*	
*	The array are first sorted in ascending order.
*	
*	The array length is then assigned to variable `len` for readablity.
*
*	The sum of values of `index 1`, `index 2` and `index length - 1` 
*	i.e. Last index are then compared to compared to the sum of values of 
*	`last index`, `second before last index` and `third before last index`.
*	
*	Either of these two values is the answer.
*	
*	@param arr
*	@return {integer}
*
*/

function maximum_product_of_three(arr)
{

	let sortedArr = arr.sort((a, b) => a - b);

	let len = sortedArr.length;

	return Math.max(
		sortedArr[0] * sortedArr[1] * sortedArr[len- 1], 
		sortedArr[len - 1] * sortedArr[len - 2] * sortedArr[len - 3],
		)
}

