var huntnav = huntnav || {};

(function() {
  huntnav.clearCanvas = function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  huntnav.drawDirectionArrow = function(canvas, angle, color) {
    var ctx = canvas.getContext('2d');
    var size = canvas.width;

    ctx.save();
    ctx.scale(1, canvas.height / canvas.width);
    ctx.translate(size / 2, size / 2);
    ctx.rotate((Math.PI / 180) * angle);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();

    ctx.moveTo(0, size * (-3/8));
    ctx.lineTo(0, size * (3/8));

    ctx.moveTo(0, size * (-3/8));
    ctx.lineTo(size * (-1/6), size * (-1/8));

    ctx.moveTo(0, size * (-3/8));
    ctx.lineTo(size * (1/6), size * (-1/8));

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  };
})();
