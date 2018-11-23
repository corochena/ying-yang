var ctx = document.querySelector("canvas").getContext("2d");

var h = 500;
var w = 1000;
var R = 200;
var r = 2;
var n = 200;
var ang1 = Math.PI / 2;
var ang2 = 3*ang1;
var ang3 = ang2;
var ang4 = ang1;

for (var nPos=0; nPos<n; nPos++) {
  var x1 = w/2 + R*Math.cos(ang1);
  var y1 = h/2 - R*Math.sin(ang1);
  var x2 = w/2 + R*Math.cos(ang2);
  var y2 = h/2 - R*Math.sin(ang2);
  
  var x3 = w/2 + R*Math.cos(ang3);
  var y3 = h/2 - R*Math.sin(ang3);
  var x4 = w/2 + R*Math.cos(ang4);
  var y4 = h/2 - R*Math.sin(ang4);
  
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.arc(x1,y1,r,0,7);
  ctx.fill();
  
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();  
  
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.stroke();  
  
  ang1 += (nPos % 4 != 0) ? 2*Math.PI / n: 0;
  ang2 += (nPos % 4 == 0) ? 2*Math.PI / n: 0;
  ang3 += (nPos % 4 != 0) ? 2*Math.PI / n: 0;
  ang4 += (nPos % 4 == 0) ? 2*Math.PI / n: 0;
  
}