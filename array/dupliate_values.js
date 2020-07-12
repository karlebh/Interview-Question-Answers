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
* 	     Given a list of numbers, where every number shows up twice except for one number, 
*        find that one number?
*
* 	@param arr
*   @return {number}
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

var array = [3, 3, 2, 2,3,1,2,3,2,3,1,2,3,2,3, 1, 3, 2, 1,1],
    MID = 2, //mid value
    i = 0, //lowest value 
    j = 0, //highest value 
    n = array.length - 1; // array index

    // while highest value is less or equal to the array index
while (j <= n) {
    if (array[j] < MID) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j++;
    } else if (array[j] > MID) {
        [array[n], array[j]] = [array[j], array[n]];
        n--;
    } else {
        j++;
    }
}
console.log(array);


