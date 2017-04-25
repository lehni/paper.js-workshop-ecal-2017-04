// This script introduces the path.lineBy function which allows you to draw
// relatively to the last point in the path:

var myRectangle = new Path();
myRectangle.fillColor = 'black';
myRectangle.closed = true;

var start = new Point(50, 50);

var down = new Point(0, 100);
var right = new Point(100, 0);
var up = new Point(0, -100);

// Add the starting point to our path:
myRectangle.add(start);

// From the last point, draw a line by {x: 0, y: 100}:
myRectangle.lineBy(down);

// From the last point, draw a line by {x: 100, y: 0}:
myRectangle.lineBy(right);

// From the last point, draw a line by {x: 0, y: -100}:
myRectangle.lineBy(up);

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Find out more about Point objects and other basic types:
// http://paperjs.org/tutorials/geometry/point-size-and-rectangle/
//
// Find out more about adding points to a path:
// http://paperjs.org/tutorials/paths/working-with-path-items/
//
// Find out more on using color and style:
// http://paperjs.org/tutorials/paths/using-color-and-style/