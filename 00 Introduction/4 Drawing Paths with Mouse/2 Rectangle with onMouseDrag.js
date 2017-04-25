// The same as 1, but making paths while you drag the mouse:

// minDistance: the minimum distance the mouse has to drag
// before firing the onMouseDrag event, since the last onMouseDrag event.
tool.minDistance = 100;

// The mouse up handler is called whenever the user drags the mouse:
function onMouseDrag(event) {
    var myPath = new Path();
    myPath.fillColor = 'black';

    var down = new Point(0, 100);
    var right = new Point(100, 0);
    var up = new Point(0, -100);

    // event.point: the position of the mouse
    myPath.add(event.point);

    myPath.lineBy(down);
    myPath.lineBy(right);
    myPath.lineBy(up);

    // Close the path by setting the closed property of Path to true
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