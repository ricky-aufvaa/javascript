// ****
// * *
// **
// *
function pattern_print(n,row,pattern){
    for(column=1;column<=(n-row);column++){
        if(column==1||column==n-row||row==0){
            pattern+="*"
        }
        else{
            pattern+="_"
        }
    }
    return pattern;
}

function star(n){
    for(row=0;row<n;row++){
        pattern = ""
        pattern = pattern_print(n,row,pattern)
        console.log(pattern)
    }
}


star(5)