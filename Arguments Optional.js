ArgumentsOptional=(n  , n1)=>{
    //Return undefined if first argument is not a number or second argument is defined, but not a number.
    if(typeof(n) !== "number"){
        return undefined ; 
    }
    //Return sum of the arguments if both are provided otherwise return a sum function.
    const sum = n1 =>
    typeof(n1) === "number"? n + n1 : undefined ; 
    return typeof(n1) === "undefined"? n1 = (sum) :sum(n1);
}
console.log(ArgumentsOptional(2,3));
// return 5 .