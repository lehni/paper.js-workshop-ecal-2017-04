// Creates a rectangle shaped path defined by two points

// First we define the two points that describe the dimensions of the rectangle:
var point1 = new Point(200, 50);
var point2 = new Point(50, 100);

// Now we use the Path.Rectangle(point1, point2) constructor to create the path
// item:
var myRectangle = new Path.Rectangle(point1, point2);

myRectangle.strokeWidth = 5;
myRectangle.strokeColor = 'yellow';
myRectangle.fillColor = '#00FF3C';

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/