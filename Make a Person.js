var Person = function(firstAndLast){
    //Create a variable that will make a copy of the full name that was passed as a parameter.
    var fullName= firstAndLast;
    //Then we can proceed to create the six methods needed and return what is asked for.
    this.getFirstName= function(){
        return fullName.split(" ")[0];

    }
    this.getLastName = function(){
        return fullName.split(" ")[1];

    }
    this.getFullName = function(){
        return fullName;
    }
    this.setFirstName = function(name){
        fullName = name +" "+ fullName.split(" ")[1];   //For the individual setters, we can use the split to turn the fullname into an array of first and last names 
                                                //and concatenate the unchanged portion of the name with what was passed as a parameter.
    }
    this.setLastName = function(name){
        fullName = fullName.split(" ")[0] +" "+ name;
    }
    this.setFullName = function(name){
        fullName = name ;
    }
    return firstAndLast;
} 
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
// return Bob Ross.