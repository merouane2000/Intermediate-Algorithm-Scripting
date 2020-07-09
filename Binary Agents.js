BinaryAgents=(str)=>{
    var str1=str.split(" ");
    var rslt = [];
    for (let i = 0 ; i < str1.length ; i++){
        rslt.push(String.fromCharCode(parseInt(str1[i] , 2))); // parseInt convert the binary code to dicimal  
                                                                //while simultaneously converting to a char with string.fromCharCode function .

    }
    return rslt.join("");
}
console.log(BinaryAgents("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// return Aren't bonfires fun!?.