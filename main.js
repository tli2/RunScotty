var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var canvas = document.getElementById('board');
canvas.setAttribute('height', windowHeight);
canvas.setAttribute('width', windowWidth);

var ctx = canvas.getContext('2d');

var myGrid = new Grid();

var circle = new Circle(0, canvas.height / 2, 40, 40, 0);

var randomTX = Math.floor(Math.random() * (canvas.width / 2 - 200)) + canvas.width / 2;
var randomTY = Math.floor(Math.random() * (canvas.height - 200)) + 100;

var t1 = new Triangle(canvas.width - 100, 100, 40, 40, 1);
var t2 = new Triangle(canvas.width - 100, canvas.height - 140, 40, 40, 2);
var t3 = new Triangle(canvas.width - 100, canvas.height / 2 - 20, 40, 40, 3);
var t4 = new Triangle(randomTX, randomTY / 2 - 20, 40, 40, 4);

myGrid.add_actor(t1);
myGrid.add_actor(circle);
myGrid.add_actor(t2);
myGrid.add_actor(t3);
myGrid.add_actor(t4);

var triangelsBehind = 4;


init_user();

var squareIndex = 10;

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.globalAlpha = 0.6;
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
ctx.globalAlpha = 1;

ctx.fillStyle = "rgba(0,0,0,0.6)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "rgba(255,255,255,1)";
ctx.font="50px Georgia";
ctx.fillText("Run, Scotty!",canvas.width / 2 - 200, 300);
ctx.font="20px Georgia";
ctx.fillText("Press Any Key to Start",canvas.width / 2 - 200, canvas.height - 50);