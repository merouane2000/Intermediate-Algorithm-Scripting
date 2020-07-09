MaptheDebris=(arr)=>{
    var GM = 398600.4418;
  var earthRadius = 6367.4447;
    var pi = 2*(Math.PI);
    var reslt = [];
    var orbit =function(obj){
var pow = Math.pow(earthRadius + obj.avgAlt,3);
var sqrt = Math.sqrt(pow/GM);
var orbitr = Math.round(pi*sqrt);
delete obj.avgAlt;
obj.orbitalPeriod = orbitr;
return obj;
    }
    for (let i in arr){
        reslt.push(orbit(arr[i]))
    }
    return reslt ; 
}
console.log(MaptheDebris([{name : "sputnik", avgAlt : 35873.5553}]));
// return [ { name: 'sputnik', orbitalPeriod: 86400 } ].