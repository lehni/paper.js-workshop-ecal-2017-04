tool.minDistance = 30;

function onMouseDrag(event) {
    var offset = event.lastPoint;

    // See what happens when you change 'new Point(1, 0)' to 'event.delta'!
    var horizontal = new Point(1, 0);
    horizontal.length = 1;
    
    var angle = 90;
    
    var vertical = horizontal.rotate(angle);

    var arrow = new Path();

    //   *
    //
    arrow.add(offset);

    //   *
    //   |
    //   |
    //   |
    //
    arrow.lineBy(vertical * 5);

    //   -------*
    //   |
    //   |
    //   |
    //
    arrow.lineBy(horizontal * (event.delta.length - 20));

    //          *
    //          |
    //   ------- 
    //   |       
    //   |       
    //   |
    //
    arrow.lineBy(vertical * 5);

    //          |\
    //   -------  \
    //   |         *
    //   |
    //   |
    //
    arrow.lineBy(horizontal * 7.5 - vertical * 7.5);

    //          |\
    //   -------  \
    //   |         \
    //   |         /
    //   |        /
    //           /
    //          *
    //
    arrow.lineBy(- horizontal * 7.5 - vertical * 7.5);

    //          |\
    //   -------  \
    //   |         \
    //   |         /
    //          * /
    //          |/
    //
    arrow.lineBy(vertical * 5);

    //          |\
    //   -------  \
    //   |         \
    //   |         /
    //   -------  /
    //          |/
    //
    arrow.closed = true;
}