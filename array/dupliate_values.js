/**
*	Question:
*
* 		Print duplicate value in an array of numbers and string??
*
* 	@param arr
*	@return {array}
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
* 		Remove duplicate value in an array of numbers and string?
*
* 	@param arr
*	@return {array}
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
* 	     	Given a list of numbers, where every number shows up twice except for one number, 
*		find that one number?
*
* 	@param arr
*   	@return {number}
*/

function find_single_number(arr)
{
let singleNumber = 0;
let i = 0;

for(i of arr){
    singleNumber ^= i;
}

return singleNumber;
}






//usage

print_duplicate_values([1,2,2,3,4,5,6,7,7,1]);
//[2,7,1]
remove_duplicate_value([1,2,2,3,4,5,6,7,7,1]);
//[1,2,3,4,5,6,7]
find_single_number([1,1,2,2,3,4,4,5,5])
//3



