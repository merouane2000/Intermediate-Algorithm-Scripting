SearchnReplace=(str ,before,after )=>{
    var count = str.indexOf(before);
    if (str[count] === str[count].toUpperCase()){
        after = after.charAt(0).toUpperCase + after.slice(1);
    }
    str = str.replace(before , after);
    return str;

}
console.log(SearchnReplace("A quick brown fox jumped over the lazy dog" , "jumped" , "leaped")); 
// return A quick brown fox leaped over the lazy dog.