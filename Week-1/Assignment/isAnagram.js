// abbcd , babcd -true
// abcd , cabc  -- false
function split_join(string1,string2){
    string1 = string1.split("")
    string1 = string1.sort()
    string2 = string2.split("")
    string2 = string2.sort()
    string1 = string1.join("")
    string2 = string2.join("")
    return [string1,string2]
}

function isAnagram(string1,string2){
    s  = split_join(string1,string2)
    if (s[0]== s[1]){
        return true;
    }
    else{
        return false;
    }
}
console.log(isAnagram("sara","asar"))

