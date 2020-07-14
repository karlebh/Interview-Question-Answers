
/**
 * Implementation of linear search algorithm;
 * 
 * 
 * @param {array} haystack
 * @param needle
 */


function linear_search(haystack, needle) 
{

    let i;

    for (i = 0; i < haystack.length; i++) {
       
        if (haystack[i] == needle) {
            console.log("Target found at index " + haystack.indexOf(haystack[i]));
        }
    } 

}

//usage
linear_search([1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 42, 47, 53, 59], 31);

//Target found at index 10