artthou=(collection,source)=>{
    var src = Object.keys(source);
    return collection.filter(function(obj){
        for( let i = 0 ; i < src.length; i++){
            if (
                !obj.hasOwnProperty(src[i])|| 
                obj[src[i]] !==source[src[i]]
            ){
                return false;
            }

        }
        return true;
    
})
}
console.log(artthou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
// return [ { first: 'Tybalt', last: 'Capulet' } ].
