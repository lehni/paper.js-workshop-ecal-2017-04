// Creates a line path

// First we define the two points to be connect by a line path item
var point1 = new Point(200, 50);
var point2 = new Point(50, 100);

// Now we use the Path.Line(point1, point2) constructor to create the path item
var myLine = new Path.Line(point1, point2);

myLine.strokeColor = 'black';

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/
