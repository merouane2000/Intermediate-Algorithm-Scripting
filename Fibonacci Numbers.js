Fibonacci=(num)=>{
    var pre= 0 ;
    var currnt=1;
    var rslt= 0;
    while (currnt <= num){
        if (currnt % 2 !==0){
            rslt += currnt; 
        }
       currnt+=pre;
       pre = currnt - pre;

    }
    return rslt;

}
console.log(Fibonacci(1000));
// return 1785.