// The same as 3, but this time a new path is created every time the user
// clicks to drag.

var line;

function onMouseDown(event) {
    // Create a new path every time the mouse is clicked
    line = new Path();
    line.strokeColor = 'black';
}

function onMouseDrag(event) {
    // Add points to path while the mouse is being dragged
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