// Creates a rectangle shaped path defined by a point and a size

// First we define the point and size objects that describe the dimensions of
// the rectangle
var myPoint = new Point(150, 100);
var mySize = new Size(70, 100);

// Now we use the Path.Rectangle(point, size) constructor to create the path
// item:
var myRectangle = new Path.Rectangle(myPoint, mySize);

myRectangle.strokeColor = 'black';

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/