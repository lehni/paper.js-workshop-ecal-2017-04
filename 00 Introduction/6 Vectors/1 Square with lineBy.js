// create a point at {x: 300, y:  300} called start:
var start = new Point(300, 300);

var square = new Path();
square.fillColor = 'black';
square.closed = true;

// Add the start point to the path as a segment point:
square.add(start);

square.lineBy(new Point(0, 100));
square.lineBy(new Point(100, 0));
square.lineBy(new Point(0, -100));