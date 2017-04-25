// A simple script that adds the mouse point to a line every time the users clicks

// Create a new path when the tool is initialized
var line = new Path();
line.strokeColor = 'black';

// The mouse down handler is called whenever the mouse button is released
function onMouseDown(event) {
    // Add the current mouse point to the line on each mouse click
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