latin=(str)=>{
    return str
    .replace(/^[aeuio]\w*/ , "$&way")
    .replace(/^([^aeuio]+)(\w*)/ , "$2$1ay")
}
console.log(latin("glove")); // return oveglay.
// this function work - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.
