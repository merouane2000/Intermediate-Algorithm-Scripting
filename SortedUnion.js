 Union=(arr)=>{
     var args = [...arguments];
     var result = [];
     for (let i = 0 ; i<args.length  ; i++){
         for (let j = 0 ; j<args[i].length ; j++){
             if (!result.includes(args[i][j])){
                 result.push(args[i][j]);
             }
         }
     }
 return result ;
}
console.log(Union([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// return [ 1, 3, 2, 5, 4 ].

// this amother function :
Union2=(...arr1)=>{
     //make an array out of the given arrays and flatten it (using the spread operator).
    var flat = [].concat(...arr);
    // create a Set which clears any duplicates since it's a regulat set and not a multiset.
    return [...new Set(flat)]
}
console.log(Union2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// return the same result .