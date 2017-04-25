// This script introduces shows a more complex drawing
// using the lineBy and arcBy functions:

var myPath = new Path();
myPath.fillColor = 'black';
myPath.closed = true;

var start = new Point(150, 50);

var right = new Point(100, 0);
var left = new Point(-100, 0);
var up = new Point(0, -100);
var down = new Point(0, 100);

myPath.add(start);

// This draws an arc from the last point by {x: 0, y: 100}
// using the arcBy(end, clockwise) function. We pass 'false' for
// the clockwise parameter, to make the arc draw in a counter-clockwize
// direction:
myPath.arcBy(down, false);

// Draw a line from the last point by the x and y values specified in 'right':
myPath.lineBy(right);

// Here we multiply down by three, this means we're moving by
// {x: 0, y: 100} * 3 = {x: 0, y: 300}:
myPath.lineBy(down * 3);

myPath.arcBy(right, false);

myPath.lineBy(up * 3);

myPath.lineBy(right);

myPath.arcBy(up, false);

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