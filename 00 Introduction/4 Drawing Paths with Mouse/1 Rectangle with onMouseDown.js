// This script draws a rectangle starting at the position where you click
// in the document:

// The mouse up handler is called whenever the user presses the mouse button:
function onMouseDown(event) {
    var myPath = new Path();
    myPath.fillColor = 'black';

    var down = new Point(0, 100);
    var right = new Point(100, 0);
    var up = new Point(0, -100);

    // We first add event.point (the position of the mouse) to the path:
    myPath.add(event.point);

    // Then relative to the last point in our path (currently event.point)
    // we draw a line by {x: 0, y: 100}:
    myPath.lineBy(down);

    // Then a line by {x: 100, y: 0} to go to the right:
    myPath.lineBy(right);

    // Then a line by {x: 0, y: -100} to go to the up:
    myPath.lineBy(up);

    // Close the path
    myPath.closed = true;
}

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating mouse tools:
// http://paperjs.org/tutorials/interaction/creating-mouse-tools/
//
// Read more about event.point & event.downPoint and other mouse event
// properties:
// http://paperjs.org/tutorials/interaction/mouse-tool-events/#mouse-position