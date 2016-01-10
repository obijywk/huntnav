var huntnav = huntnav || {};

(function() {
  huntnav.latLonDistance = function(pos1, pos2) {
    var R = 6371000; // metres
    var p1 = (Math.PI / 180) * pos1.lat;
    var p2 = (Math.PI / 180) * pos2.lat;
    var dp = (Math.PI / 180) * (pos2.lat - pos1.lat);
    var dl = (Math.PI / 180) * (pos2.lon - pos1.lon);
    var a = Math.sin(dp/2) * Math.sin(dp/2) +
      Math.cos(p1) * Math.cos(p2) *
      Math.sin(dl/2) * Math.sin(dl/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  };

  huntnav.latLonAngle = function(pos1, pos2) {
    var p1 = (Math.PI / 180) * pos1.lat;
    var p2 = (Math.PI / 180) * pos2.lat;
    var dp = (Math.PI / 180) * (pos2.lat - pos1.lat);
    var dl = (Math.PI / 180) * (pos2.lon - pos1.lon);

    var y = Math.sin(dl) * Math.cos(p2);
    var x = Math.cos(p1) * Math.sin(p2) -
      Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
    var angle = (180 / Math.PI) * Math.atan2(y, x);

    if (angle < 0) {
      angle = 360 + angle;
    }
    return angle;
  };

  huntnav.deviceRelativeAngle = function(alpha, absoluteAngle) {
    var angle = absoluteAngle + alpha;
    if (angle > 360) {
      angle -= 360;
    }
    return angle;
  }
})();
