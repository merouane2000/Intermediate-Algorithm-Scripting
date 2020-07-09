convertjs=(str)=>{
    var arr = str.split("");
    for (let i = 0 ; i < arr.length ; i ++){
        switch(arr[i]){
            case "&":
                arr[i]= "&amp;";
                break;
                case ">":
                    arr[i] = "&gt;";
                    break;
                    case "<":
                        arr[i] = "&lt;" ;
                        break;
                        case "'":
                            arr[i] = "&apos;";
                            break;
                            case '"': 
                            arr[i] = "&quot;" ;
                            break;       
                        }
    }
    arr = arr.join("");
    return arr;
}
console.log(convertjs("Dolce & Gabbana"));
// return str convert to Dolce &amp; Gabbana .