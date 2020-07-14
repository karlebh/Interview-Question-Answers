//import `swap` function from utility.js
import { swap } from '../../utility.js'


/**
* Implementation of 3-way partioning algorithm
* also know as the Dutch National Flag Algorithm
*
* @param {array} arr
*
*/

function sort_data(arr){
    
        var low = 0;
        var middle = 0;
        var high = arr.length - 1;

        while(middle <= high) {

                if(arr[middle] === 0) {

                swap(arr, low++, middle++);

                }
                else if(arr[middle] === 1) {

                    middle++;   

                }
                else if(arr[middle] === 2 ) {

                swap(arr, middle, high--);

                }

        }

                console.log(arr);

    }


//usage
sort_data([1,2,0,0,2,2,1]);

//[0,0,1,1,2,2,2]