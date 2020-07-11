/**
*	Question:
*
* 		Print the dulicate values in an array?
*
* 	@param arr
*   @return {array}
*/

function print_duplicate_values(arr)
{
	//e: values, i: index, a: array

	return arr.filter( (e, i, a) => {

			return a.indexOf(e) !== i;
	})
}

/**
*	Question:
*
* 		Remove the array value duplicate?
*
* 	@param arr
*   @return {array}
*/

function remove_duplicate_values(arr)
{
	//e: values, i: index, a: array

	return arr.filter( (e, i, a) => {

			return a.indexOf(e) === i;
	})
}

/**
*	Question:
*
* 		Check if array contains duplicate value?
*
* 	@param arr
*   @return {boolean}
*/






//usage

print_duplicate_values([1,2,2,3,4,5,6,7,7,1]);
//[2,7,1]
remove_duplicate_value([1,2,2,3,4,5,6,7,7,1]);
//[1,2,3,4,5,6,7]

