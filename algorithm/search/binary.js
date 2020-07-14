
/**
 *  Implementation of binary search algorithm. 
 * 
 *  Important! The array must be sorted. 
 * 
 *  @param {array} haystack
 *  @param needle
 */


function binary_search(haystack, needle) 
{

    let startIndex = 0;
    let endIndex = haystack.length - 1;
    
    while (startIndex <= endIndex) {
        
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (needle === haystack[middleIndex]) {
            return console.log("Target found at index: " + middleIndex);
        }

        if (needle > haystack[middleIndex]) {
            console.log("searching right side of array");

            startIndex = middleIndex + 1;
        }

        if (needle < haystack[middleIndex]) {
            console.log("searching left side of array");

            endIndex = middleIndex - 1;
        } else {
             console.log("Not in this iteration. Looping another iteration");
        }
        
    }
    console.log("Target not found in array!");
}


//usage 

binary_search([1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 42, 47, 53, 59], 17);

//searching left side of array
//searching right side of array
//Not in this iteration.Looping another iteration
//searching right side of array
//Not in this iteration.Looping another iteration
//Target found at index: 6