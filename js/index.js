var canvas = document.getElementById("mom");
var context = canvas.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;
var fontSize = 14;
var colunms = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < colunms; i++) {
  drops[i] = 1;
}
var str = "甲 乙 丙 丁 戊 己 庚 辛 壬 癸";
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.font = "400 " + fontSize + "px 宋体";
  context.fillStyle = "lime";
  for (var i = 0; i < colunms; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);

    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
};
function  randColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return"rgb("+ r + ","+ g +","+ b +")";

}
draw();
setInterval(draw,20);