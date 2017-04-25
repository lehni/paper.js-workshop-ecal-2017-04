var values  = {
    // The minimum distance the mouse has to drag before firing the onMouseDrag
    // event, change the value and see what happens.
    minDistance: 10,
    smoothPath: true,
    mirror: 'horizontal'
};

tool.minDistance = values.minDistance;
project.currentStyle.strokeColor = 'black';

var path;

function onMouseDown(event) {
    path = new Path();
}

function onMouseDrag(event) {
    // the difference between the point where the user clicked
    // and the current location of the mouse
    var difference = event.point - event.downPoint;

    var mirrorPoint;
    
    if (values.mirror == 'vertical') {
        mirrorPoint = new Point(1, -1);
    } else {
        mirrorPoint = new Point(-1, 1);
    }
    var mirrored = event.downPoint + difference * mirrorPoint;

    // add a segment at the end of the path where the mouse is
    path.add(event.point);
    
    // add the mirrored point to the start of the path
    path.insert(0, mirrored);
    
    if (values.smoothPath) {
        path.smooth();
    }
}

var components = { 
    minDistance: {
        type: 'number', label: 'Minimum Distance',
        onChange: function(value) {
            tool.minDistance = value; 
        }
    },
    smoothPath: {
        type: 'checkbox', label: 'Smooth Path'
    },
    mirror: {
        type: 'list',
        options: ['horizontal', 'vertical']
    }
};

var palette = new Palette('Mirror Tool', components, values);