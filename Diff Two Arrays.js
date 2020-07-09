diffArry = (arr1 , arr2 ) => {
    return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
console.log(diffArry([1, 2, 3, 5], [1, 2, 3, 4, 5])); //return [ 4 ] the diffrent elemt betwiin 2 arrys.