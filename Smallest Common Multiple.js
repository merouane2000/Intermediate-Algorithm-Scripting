SmallestCM=(arr)=>{
    var max=Math.max(arr[0] , arr[1]);
    var min=Math.min(arr[0] , arr[1]);
    // Initially the solution is assigned to the highest value of the array
    var rslt= max;
    for (let i = max-1 ; i>=min ; i--){
          // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
        if(rslt%i){
            rslt += max;
            i=max;
        }
    }
    return rslt;
}
console.log(SmallestCM([1,5]));
// return 60.