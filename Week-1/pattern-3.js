// ****
// ***
// **
// *
function get_columns(numOfRows,row,pattern){
    for(col=1;col<=(numOfRows-row);col++ ){
        pattern+="*"
    }
    // console.log(pattern)
    return pattern;
}

function pattern(numOfRows){
    for(row=1;row<=numOfRows;row++){
        pattern  = ""
        pattern += get_columns(numOfRows,row,pattern);
        console.log(pattern)
    }
}


console.log(pattern(5))