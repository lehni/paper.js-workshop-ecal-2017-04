// Just like the constructor function, any function can have a row of parameters
// between the parenthesis "()". If we go back to our sayHello(), we could for
// example define a parameter in which we can pass something to it that it
// should print to the console, along with a default message:

function sayHello(somethingToSay) {
    // Note that console.log() is a function just like sayHello(), but it is not
    // defined by us, it's provided by the web-browser, so we can print
    // something to the console. And console.log() can receive parameters just
    // like sayHello(), but it is more flexible and can receive a variable
    // amount, which it just prints out one after the other:
    console.log('Hey world, did you know:', somethingToSay);
}


sayHello('Scripting is great');
sayHello('Scripting is really great');
