SpinalTap=(arr)=>{
    return Str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(SpinalTap('This Is Spinal Tap')); // return this-is-spinal-tap.