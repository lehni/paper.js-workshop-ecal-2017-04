////////////////////////////////////////////////////////////////////////////////
// This script belongs to the following tutorial:
//
// http://paperjs.org/tutorials/interaction/working-with-mouse-vectors/#creating-the-body

tool.minDistance = 15;
tool.maxDistance = 45;

var path;

function onMouseDown(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.selected = true;

    path.add(event.point);
}

function onMouseDrag(event) {
    var step = event.delta;
    step.angle += 90;

    // The top point: the middle point + the step rotated by 90 degrees:
    //   -----*
    //   |
    //   ------
    var top = event.middlePoint + step;
    
    // The bottom point: the middle point + the step rotated by 90 degrees:
    //   ------
    //   |
    //   -----*
    var bottom = event.middlePoint - step;
    
    var line = new Path();
    line.strokeColor = 'black';
    line.add(top);
    line.add(bottom);

    path.add(top);
    path.insert(0, bottom);
}