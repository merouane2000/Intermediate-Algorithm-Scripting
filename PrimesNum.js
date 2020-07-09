PrimesNum=(num)=>{
    var i = 1 ; 
    var rslt= 0 ;
    while(i<= num ){
        if (prime(i)){
            rslt += i;

        }
        i++;
    }
    //function to check if a number is prime or not.
    function prime(x){
        for (i = 2 ; i < x ; i++){
            if (x % i === 0) return false; 
        } 
        return x !== 1 && x !==0 ;
    }

}
console.log(PrimesNum(977));
//return 73156.