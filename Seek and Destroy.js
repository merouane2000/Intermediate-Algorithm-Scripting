 Destroy=(arr)=>{
     var args=Array.prototype.slice.call(arguments);// return [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ].
     for(let i in arr){
         for(let j in args){
             if (arr[i] === args[j]){
                 delete arr[i];
             }
         }
     }
     return arr.filter(Boolean);
 }
 console.log(Destroy([1, 2, 3, 1, 2, 3], 2, 3)); // return [1 , 1] .
 //this another function .
 Destroy2 =(arr1)=>{
     var args1=Array.from(arguments).slice(1);//  this return just arry of arguments and remove the first index [2,3].
   return  arr1.filter(function(x){
         return !args1.includes(x);
     })
 }
 console.log(Destroy2([1, 2, 3, 1, 2, 3], 2, 3)); // return the same value [1 , 1] .
