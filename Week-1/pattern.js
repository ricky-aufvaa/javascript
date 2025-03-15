/* *
   **
   ***
   **** 
   */
const n = 5;
function createPattern(n){
    for (let row = 1; row <= n; row++) {
        pattern = "";
        for (let column = 1 ; column <=row; column++){
            pattern = pattern + "*";
        }
        console.log(pattern)
    }
}

createPattern(6)