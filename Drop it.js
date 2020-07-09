Drop=(arr,func)=>{
    var len = arr.length;
    for(let i = 0 ; i < len ; i++){
        if (func(arr[0])){
            break;
        } 
        else{
            arr.shift();
        }
    }
    return arr;
}
console.log(Drop([1, 2, 3], function(n) {return n < 3; }));
// return [1, 2, 3];