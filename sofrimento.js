var drawGrid = function(w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = w;
    ctx.canvas.height = h;
    
    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#smallGrid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#grid)" /> \
    </svg>';

    var DOMURL = window.URL || window.webkitURL || window;
    
    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
    }
    img.src = url;
}
drawGrid(800, 400, "canvas");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  }

    elemLeft = canvas.offsetLeft;
    elemTop = canvas.offsetTop;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var firstClick = true;

// Add event listener for `click` events.
// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft;
    var y = event.pageY - elemTop;
        if (firstClick == true) {
            firstClick = false;
            x1 = x;
            y1 = y;
        }
        else {
            console.log(x1);
            console.log(x2);
            firstClick = true;
            x2 = x;
            y2 = y;
            ctx.beginPath();
            canvas_arrow(ctx, x1, y1, x2, y2);
            ctx.stroke();
        };
});