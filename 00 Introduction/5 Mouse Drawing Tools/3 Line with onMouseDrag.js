// A simple script that adds the mouse point to the line every time
// the mouse is dragged.
var line = new Path();
line.strokeColor = 'black';

// The mouse drag handler
function onMouseDrag(event) {
    // Add segment points to the path while the mouse is being dragged:
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