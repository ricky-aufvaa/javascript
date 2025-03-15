//___*___     ----row = 1 , column ---- 1X, column ---5 but print(3)
//__***__     ----row = 2, column -----3X, column ----5 but print(2,3,4)
//_*****_   ---row = 3 , column -----5X, column -----5 but print(12345)
//*******
//  */
function left_side(numberOfRows,row,pattern){
    //if row = 4; columns - 3,2,1,0  --- columns - 1 to numberofRows-row
    for(column =1 ; column<=numberOfRows-row;column++){
        pattern+="_"
    }
    return pattern
}

function mid_side(numberOfRows,row,pattern){
    for(column = 1;column<=((2*row)-1);column++){
        pattern+="*"
    }
    return pattern
}


function createPattern(numberOfRows){
    for(row = 1;row<=numberOfRows;row++){
        pattern = ""
        left_pattern =left_side(numberOfRows,row,pattern)
        // console.log(left_pattern)
        mid_pattern = mid_side(numberOfRows,row,pattern)
        // console.log(mid_pattern)
        pattern = left_pattern + mid_pattern + left_pattern
        console.log(pattern+"\n")
    }
}
createPattern(4)