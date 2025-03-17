// aabcdaa , aadcbaa

function isPalindrome(s1,s2){
    if (s1.length != s2.length){
        return false
    }
    for(i =0;i<s1.length;i++){
        if(s1[i]!=s2[s2.length-i-1]){
            return false
    }
}
return true
}


console.log(isPalindrome("abbcdaa","aadcbba"))