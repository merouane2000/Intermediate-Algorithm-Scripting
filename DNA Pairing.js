DNAPairing=(str)=>{
    var arr = [];
    var srch = function(x){
        switch(x){
            case "G":
                arr.push(["G" , "C"]);
                break;
                case "C":
                    arr.push(["C" , "G"]);
                    break;
                    case "A":
                        arr.push(["A" , "T"]);
                        break;
                        case "T":
                            arr.push(["T" , "A"]);
                            break;
        }
    }
    for (var i=0 ; i<str.length ; i++){
        srch(str[i]);
    }
    return arr;
}
console.log(DNAPairing("GCG"));
// return an DNA pairing [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ].