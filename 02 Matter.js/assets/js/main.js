// Matter.js module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Svg = Matter.Svg,
    Vertices = Matter.Vertices;

var debug = false,
    particleSize = 50,
    strokeWidth = 10,
    engine = Engine.create();

if (debug) {
     // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine
    });

    Render.run(render);
}

var bodyOptions = {
  frictionAir: 0.001,
  friction: 0.4,
  restitution: 0.5,
  stiffness: 0.2
};

var tool = new Tool();

var drawing = false;
$(document).on('click', '.toggle-button', function() {
    $(this).toggleClass('toggle-button-selected');
    drawing = !drawing;
    $('.description').text(drawing ? 'draw' : 'create');
    tool.fixedDistance = drawing ? strokeWidth : 0;
});

function addBody(body, item) {
  body.item = item;
  World.add(engine.world, body);
}

// create rectangle
function addRectangle(x, y, w, h, isStatic) {
  var body = Bodies.rectangle(x, y, w, h, Object.assign({
    isStatic: isStatic
  }, bodyOptions));
  var item = new Shape.Rectangle({
  	point: [x, y],
  	size: [w, h],
    fillColor: new Color(Math.random(), Math.random(), Math.random(), 1)
  });
  addBody(body, item);
}

// create circle
function addCircle(x, y, r, isStatic) {
  var body = Bodies.circle(x, y, r, Object.assign({
    isStatic: isStatic
  }, bodyOptions));
  var item = new Shape.Circle({
    center: new Point(x, y),
    radius: r,
    fillColor: new Color(Math.random(), Math.random(), Math.random(), 1)
  });
  addBody(body, item);
}

function boundsCenter(bounds) {
  return new Point(
      (bounds.min.x + bounds.max.x) / 2,
      (bounds.min.y + bounds.max.y) / 2);
}

function addMatterVertices(path) {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svg.setAttribute('d', path.pathData);
  var vertices = Svg.pathToVertices(svg, 30);
  var position = path.position;
  var body = Bodies.fromVertices(position.x, position.y, vertices, {
    isStatic: true
  });
  if (body) {
    // align matterjs body with paperjs drawn shape
    var difference = position - boundsCenter(body.bounds);
    Matter.Body.translate(body, difference);
    path.pivot = position + difference;
    addBody(body, path);
  } else {
    path.remove();
  }
}

// add random objects
for (var i = 0; i < 5; i++){
  var random = Math.random() * particleSize;
  addRectangle(random + 300, random, random, random);
  addCircle(random + 300, random, random);
}

// add ground
var size = view.size;
addRectangle(size.width / 2, size.height - 10, size.width, 20, true);

function notInView(body, w, h){
  return body.bounds.max.x <= 0  || body.bounds.min.x >= view.size.width;
}

view.onFrame = function(event) {
  var bodies = engine.world.bodies;
  for (var i = 0; i < bodies.length; i++) {
    var body = bodies[i];
    var item = body.item;
    item.position = body.position;
    item.rotation =  body.angle * 180 / Math.PI;
    if (notInView(body)) {
      World.remove(engine.world, body);
      item.remove();
    }
  }
}

// run the engine
Engine.run(engine);

var mousePath;

tool.onMouseDrag = function(event) {
  if (drawing) {
    var step = event.delta / 2;
    step.angle += 90;
    step.length = strokeWidth / 2;

    var top = event.middlePoint + step;
    var bottom = event.middlePoint - step;

    mousePath.add(top);
    mousePath.insert(0, bottom);
    mousePath.smooth();
  } else {
    random = Math.random() * particleSize;
    addRectangle(event.point.x, event.point.y, random, random);
    addCircle(event.point.x, event.point.y, random);
  }
}

tool.onMouseDown = function(event) {
  if (drawing) {
    mousePath = new Path({
      fillColor: {
        hue: Math.random() * 360,
        saturation: 1,
        brightness: 1
      }
    });
    mousePath.add(event.point);
  } else {
    random = Math.random() * particleSize;
    addRectangle(event.point.x, event.point.y, random, random);
    addCircle(event.point.x, event.point.y, random);
  }
}

tool.onMouseUp = function(event) {
  if (drawing) {
    mousePath.add(event.point);
    mousePath.closed = true;
    mousePath.smooth();
    addMatterVertices(mousePath);
  }
}
