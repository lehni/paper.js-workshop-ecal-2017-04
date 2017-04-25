// There are many more types of values in JavaScript and Paper.js. You will
// learn about these slowly, as we move forward. But here a very useful one that
// you will use a lot: the Point object.

// Objects are values just like numbers or strings, but they describe other
// things than numeric values or text. For example, the Paper.js Point object is
// there to define a two dimensional position in the document.

// In order to create a point, we create it by using its constructor:

var myPoint1 = new Point(10, 100);
var myPoint2 = new Point(100,200); 

console.log(myPoint1); // { x: 10, y: 100 }

// Strings and values are basic types in JavaScript and do not need to be
// created with such a constructor. But more complex objects such as a Point
// have their constructors, and calling it using the "new Point(...)" syntax is
// like asking the computer to make a point for us. The parameters "(10, 100)"
// is what we pass to the constructor: We ask it to produce a point with x = 10
// and y = 100 coordinates.
