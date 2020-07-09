Sumallnum = (arr)=>{
    var temp = 0 ;
    var max = Math.max(arr[0]  , arr[1]);
    var min = Math.min(arr[0] , arr[1]);
    for (let i = min ; i<=max ; i++){
        temp +=i;
    } 
    return temp;
}
console.log(Sumallnum([5, 10])); // return 45.
console.log (Sumallnum([10,5])); //return 45.