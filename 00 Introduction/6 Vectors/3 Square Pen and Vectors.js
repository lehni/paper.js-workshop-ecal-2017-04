var offset = new Point(100, 100);
var vector = new Point(100, 0);
var angle = 90;
var increase = 0;

var myPath = new Path();
myPath.closed = true;
myPath.fillColor = 'red';

myPath.add(offset);

myPath.lineBy(vector);

vector.angle += angle;
vector.length += increase;
myPath.lineBy(vector);

vector.angle += angle;
vector.length += increase;
myPath.lineBy(vector);