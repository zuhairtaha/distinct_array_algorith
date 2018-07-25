"use strict";
Array.prototype.distinct2 = function () {
    let A            = this; // current array
    let R            = [];  // result array
    let repeated; // boolean : true(the item is no unique and vise versa)
    let countCompare = 0; // counter
    for (let i = 0; i < A.length; i++) { // loop through array items
        countCompare++;
        repeated = false;
        for (let j = i + 1; j < A.length; j++) { // inner loop (compare each item with all items)
            countCompare++;
            if (j === i) {
                countCompare++;
                continue; // to avoid comparing the item with itself
            }
            if (A[i] === A[j]) { // if there is similar element
                countCompare++;
                repeated = true; // then it is repeated
            }
        }
        if (!repeated) { // if it is unique
            countCompare++;
            R.push(A[i]); // push it to the result array
        }
    }
    return {
        unique:   R,
        compares: countCompare
    };
};