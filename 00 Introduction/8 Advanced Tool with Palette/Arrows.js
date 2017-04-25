////////////////////////////////////////////////////////////////////////////////
// Values

var values = {
    distance: 40,
};

tool.minDistance = values.distance;

////////////////////////////////////////////////////////////////////////////////
// Mouse handling

project.currentStyle.strokeColor = 'black';

function onMouseDrag(event) {
    // Create a vector in the direction of the mouse movement
    var step = event.delta / 3;

    var left = event.middlePoint - step;
    var right = event.middlePoint + step;

    var top = event.middlePoint - step.rotate(90);
    var bottom = event.middlePoint + step.rotate(90);
    
    var arrowLine = new Path();
    arrowLine.add(left);
    arrowLine.add(right);

    var arrowHead = new Path();
    arrowHead.add(top);
    arrowHead.add(right);
    arrowHead.add(bottom);
}

////////////////////////////////////////////////////////////////////////////////
// Interface

var components = {
    distance: {
        label: 'Min Distance',
        steppers: true,
        min: 0,
        onChange: function(value) {
            tool.minDistance = value;
        }
    },
};

var palette = new Palette('Arrows', components, values);