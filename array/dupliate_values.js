/**
*	Question:
*
* 		Print the dulicate values in an array?
*
* 	@param array
*   @return array
*/

function print_duplicate_values(arr)
{
	//e: values, i: index, a: array

	return arr.filter( (e, i, a) => {

			return a.indexOf(e) != i;
	})
}



//usage

print_duplicate_values([1,2,2,3,4,5,6,7,7,1]);

//[2,7,1]
