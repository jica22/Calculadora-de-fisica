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

function drawVector(xs,ys,x,y) {
    if (xs < x && ys < y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x-10,y);
        ctx.lineTo(x,y-10);
        ctx.closePath();
        ctx.fill();
    } else if (xs > x && ys > y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y);
        ctx.lineTo(x,y+10);
        ctx.closePath();
        ctx.fill();

    }  else if (xs < x && ys > y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x-10,y);
        ctx.lineTo(x,y+10);
        ctx.closePath();
        ctx.fill();

    } else if (xs < x && ys < y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y);
        ctx.lineTo(x,y+10);
        ctx.closePath();
        ctx.fill();

    } else if (xs > x && ys < y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y);
        ctx.lineTo(x,y-10);
        ctx.closePath();
        ctx.fill();

    } else if (xs > x && ys < y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y);
        ctx.lineTo(x,y-10);
        ctx.closePath();
        ctx.fill();

    } else if (xs < x && ys == y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x-10,y+10);
        ctx.lineTo(x-10,y-10);
        ctx.closePath();
        ctx.fill();

    } else if (xs > x && ys == y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y-10);
        ctx.lineTo(x+10,y+10);
        ctx.closePath();
        ctx.fill();

    } else if (xs == x && ys < y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y-10);
        ctx.lineTo(x-10,y-10);
        ctx.closePath();
        ctx.fill();

    } else if (xs == x && ys > y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x-10,y+10);
        ctx.lineTo(x+10,y+10);
        ctx.closePath();
        ctx.fill();

    }
    ctx.beginPath();
    ctx.moveTo(xs,ys);
    ctx.lineTo(x,y);
    ctx.stroke();
}

drawVector(50,5,15,50);