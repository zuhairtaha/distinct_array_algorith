"use strict";

//region variables
let size           = document.querySelector("#size");
let arraySizeForm  = document.querySelector("#arraySizeForm");
let arrayGenerated = document.querySelector("#arrayGenerated");
let alg1Res        = document.querySelector("#alg1Res");
let alg2Res        = document.querySelector("#alg2Res");
let numEq1         = document.querySelector("#numEq1");
let numEq2         = document.querySelector("#numEq2");
let resultsP       = document.querySelector("#resultsP");
let loading        = document.querySelector("#loading");
let aSize          = document.querySelector("#aSize");
let aSize1         = document.querySelector("#a1Size");
let aSize2         = document.querySelector("#a2Size");
let elementRange   = document.querySelector("#elementRange");
let jumbotron      = document.querySelector(".jumbotron");
let start;
let end;
//endregion

//region generate array items function
let randomItem = () => {
    let text     = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < elementRange.value; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
//endregion

jumbotron.addEventListener("click", () => {
    document.location = "./"
});

loading.style.display = "none";
arraySizeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loading.style.display = 'flex';

    //region generate array
    let B = [];
    let S = parseInt(size.value);
    for (let s = 0; s < S; s++) {
        B[s] = randomItem();//Math.round(Math.random() * 1000);
    }
    arrayGenerated.innerHTML = B.join(", ");
    //endregion

    //region apply algorithm 1
    start  = performance.now();
    let A1 = B.distinct1();
    end    = performance.now();
    let N1 = A1.compares;
    let T1 = Math.round(end - start);

    alg1Res.innerHTML = `${A1.unique.join(", ")}`;
    numEq1.innerHTML  = `Number of comparisons = N1 = 
                         <span class="badge badge-info">
                            ${N1.toLocaleString()}
                         </span>
                         <br/>
                         <span>Execution time = T1 = 
                            <span class="badge badge-info">
                                ${T1}
                            </span>
                         </span>`;
    //endregion

    //region apply algorithm 2
    start             = performance.now();
    let A2            = B.distinct2();
    end               = performance.now();
    let N2            = A2.compares;
    let T2            = Math.round(end - start);
    alg2Res.innerHTML = `${A2.unique.join(", ")}`;
    numEq2.innerHTML  = `Number of comparisons = N2 = 
                         <span class="badge badge-info">
                            ${N2.toLocaleString()}
                         </span>
                         <br/>
                         <span>Execution time = T2 = 
                            <span class="badge badge-info">
                                ${T2}
                            </span>
                         </span>`;
    //endregion

    //region results
    resultsP.innerHTML = `N2 / N1 = ${(N2 / N1).toFixed(1)} <br/>
                          T2 / T1 = ${(T2 / T1).toFixed(1)}`;

    // add new points to arrays
    ar1.push({x: S, y: T1});
    ar2.push({x: S, y: T2});

    // sort the arrays of objects ascending
    ar1.sort(function (a, b) {
        return a.x - b.x
    });
    ar2.sort(function (a, b) {
        return a.x - b.x
    });

    // refresh chart
    chart.render();

    // set input[size] value (increase it)
    size.value = Math.round(S * 1.5);

    // hide progress bar
    loading.style.display = "none";

    aSize.innerHTML  = `(${B.length})`;
    aSize1.innerHTML = `(${A1.unique.length})`;
    aSize2.innerHTML = `(${A2.unique.length})`;

    //endregion

});