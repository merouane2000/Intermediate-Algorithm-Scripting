Steamroller=(arr)=>{
    var slt=[];
      // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array
    var flat = function(arg){
        if (!Array.isArray(arg)){
            slt.push(arg);

        }else{
            for (let i in agr){
                flat(arg[i]);
            }
        }
    };
    arr.forEach(flat)
    return  slt;
}
console.log(Steamroller([1, [2], [3, [[4]]]])); // return [ 1, 2, 3, 4 ].
