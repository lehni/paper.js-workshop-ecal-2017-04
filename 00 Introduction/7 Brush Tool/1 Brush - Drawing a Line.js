////////////////////////////////////////////////////////////////////////////////
// This script belongs to the following tutorial:
//
// http://paperjs.org/tutorials/interaction/working-with-mouse-vectors/#drawing-a-line-while-dragging

// The minimum distance the mouse has to drag
// before firing the next onMouseDrag event:
tool.minDistance = 15;

var path;

function onMouseDown(event) {
    // Create a new path and select it:
    path = new Path();
    path.strokeColor = 'black';
    path.selected = true;

    // Add a segment to the path where
    // you clicked:
    path.add(event.point);
}

function onMouseDrag(event) {
    // Every drag event, add a segment
    // to the path at the position of the mouse:
    path.add(event.point);
}