EverythingBeTrue=(clt , pre)=>{
    var result = 0 ; 
    for (let i in clt){
        if (clt[i].hasOwnProperty(pre) && Boolean(clt[i][pre])){
            result++ ; 
        }
    }
    return result === clt.length ;
}
console.log(EverythingBeTrue([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//return true.