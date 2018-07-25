"use strict";
Array.prototype.distinct1 = function () {
    let A            = this;
    let R            = []; // Result array (distinct/unique items)
    let skip; // temporary variable to break while and for if two compared items are similar
    let countCompare = 0;
    for (let i = 0; i < A.length; i++) {
        countCompare++;
        skip = false; // initial value is false (don't break or continue if true)
        for (let j = 0; j < R.length; j++) { // looping through result array items
            countCompare++;
            if (A[i] === R[j]) { // check if two elements are equals
                skip = true; // *If equals
                countCompare++;
            }
            if (skip) {
                countCompare++;
                break; // then break for
            }
        }
        if (skip) {
            countCompare++;
            continue; // and continue to next item
        }
        R.push(A[i]); // *Else add this item to result array
    }

    return {
        unique:   R,
        compares: countCompare
    };
};