window.onload = function () {
    var num = 1000;

    var canvas = document.getElementById("canvas");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    var particles = d3.range(num).map(function() {
        return [
            Math.round(width*Math.random()),
            Math.round(height*Math.random()),
            "rgba("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+",0.9)"
        ];
    });

    d3.timer(step);

    document.getElementsByTagName("body")[0].addEventListener('mousedown', getCords, false);
    function getCords(e) {
        particles.push([
            e.offsetX,
            e.offsetY,
            "rgba("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+",0.9)"
        ]);
    }

    function step() {
        ctx.fillStyle = "rgba(33,33,33,0.1)";
        ctx.fillRect(0,0,width,height);
        particles.forEach(function(p) {
            ctx.fillStyle = p[2];
            p[0] += Math.round(2*Math.random()-1);
            p[1] += Math.round(2*Math.random()-1);
            if (p[0] < 0) p[0] = width;
            if (p[0] > width) p[0] = 0;
            if (p[1] < 0) p[1] = height;
            if (p[1] > height) p[1] = 0;
            drawPoint(p);
        });
    }

    function drawPoint(p) {
        ctx.fillRect(p[0],p[1],2,2);
    }
};