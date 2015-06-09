// var rectangle = {
//   x: 20,
//   y: 10,
//   width: 40,
//   height: 40,
// }

// var triangle = {
//   x: 20,
//   y: 100,
//   width: 40,
//   height: 40,
// }

// var circle = {
//   x: 20,
//   y: 190,
//   width: 40,
//   height: 40,
// }

// window.requestAnimFrame = (function(callback) {
//   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//   function(callback) {
//     window.setTimeout(callback, 1000 / 60);
//   };
// })();

// function animate(myTriangle, canvas, context, startTime) {
//   // update
//   var time = (new Date()).getTime() - startTime;

//   var linearSpeed = 100;
//   // pixels / second
//   var newX = linearSpeed * time / 1000;

//   if(newX < canvas.width - myTriangle.width) {
//     myTriangle.x = newX;
//   }

//   // clear
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   drawTriangle(triangle, context);

//   // request new frame
//   requestAnimFrame(function() {
//     animate(myTriangle, canvas, context, startTime);
//   });
// }

// drawTriangle(triangle, ctx);
// // ctx.save();
// drawCircle(circle, ctx);
// drawRectangle(rectangle, ctx);

// setTimeout(function() {
//   var startTime = (new Date()).getTime();
//   animate(triangle, board, ctx, startTime);
// }, 1000);

function moveByDirection(actor, x, y) {
  actor.move(actor.get_x() + x * 10, actor.get_y() + y * 10);
}