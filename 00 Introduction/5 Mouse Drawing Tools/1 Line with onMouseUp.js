// A simple script that draws a line between the mouse down point
// and the mouse up point

// The mouse up handler is called whenever the user releases the mouse button:
function onMouseUp(event) {
    var line = new Path();
    line.strokeColor = 'black';

    line.add(event.downPoint);
    line.add(event.point);
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