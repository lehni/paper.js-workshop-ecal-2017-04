// tool.minDistance = 15;
// tool.maxDistance = 45;

var path;

function onMouseDown(event) {
    path = new Path();
    path.fillColor = 'green';

    path.add(event.point);
}

function onMouseDrag(event) {
    var step = event.delta;
    step.angle += 90;

    // If the number of the mouse drag event is an odd number:
    if (event.count % 2 == 1) {
        // Change the length of the step vector to 5 pt:
        step.length = 5;
    }
    
    // The top point: the middle point + the step rotated by 90 degrees:
    //   -----*
    //   |
    //   ------
    var top = event.middlePoint + step;
    
    // The bottom point: the middle point - the step rotated by 90 degrees:
    //   ------
    //   |
    //   -----*
    var bottom = event.middlePoint - step;
    
    path.add(top);
    path.insert(0, bottom);
    path.smooth();
}

function onMouseUp(event) {
    path.add(event.point);
    path.closed = true;
    path.smooth();
}