function init_draw(myGrid, context) {
  TimeControl(myGrid, context);
}

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function TimeControl(myGrid, context) {
  // var squares = myGrid.getAllSquares();

  // for(var i = 0; i < squares.length; i++) {
  //   squares[i].dropTime();
  // }
  var allBehind = true;

  refresh(context);

  if(((circle.get_x() + circle.get_width()) >= (canvas.width - 10)) && ((circle.get_y() + circle.get_height()) >= (canvas.height / 2 - 28)) && ((circle.get_y()) <= (canvas.height / 2 + 28))) {
    console.log("wins");
    done = true;
    win(context);
  }

  var triangles = myGrid.getAllTriangles();
  for(var i = 0; i < triangles.length; i++) {
    if(didCollide(circle.get_x(), circle.get_y(), triangles[i].get_x(), triangles[i].get_y(), 40)) {
      done = true;
      fail(context);
    }
    if(!triangles[i].behind) {
      allBehind = false;
    }
  }

  if(allBehind) {
    think(myGrid, 7, 1);
  } else {
    if(circle.get_x() > canvas.width / 4) {
      think(myGrid, 6, 1);
    } else {
      think(myGrid, 3, 1);
    }
  }

  if(!done) {
    requestAnimFrame(function() {
      TimeControl(myGrid, context);
    });
  }
}

function refresh(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.globalAlpha = 0.6;
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
  context.globalAlpha = 1;

  var randomR = randomColor();
  var randomG = randomColor();
  var randomB = randomColor();
  var goalString = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";

  context.fillStyle = goalString;
  context.fillRect(canvas.width - 10, canvas.height / 2 - 30, 10, 60);

  for(var i = 0; i < myGrid.grid.length; i++) {
    myGrid.grid[i].draw(context);
  }

  // console.log("refreshing...");
}

function win(context) {
  context.fillStyle = "rgba(0,0,0,0.6)";
  context.fillRect(0,0,canvas.width,canvas.height);

  context.fillStyle = "rgba(255,255,255,1)";
  context.font="50px Georgia";
  context.fillText("Congratulations!",canvas.width / 2 - 200, 300);

  context.font="20px Georgia";
  context.fillText("Press [Enter] to Restart",canvas.width / 2 - 200, canvas.height - 50);
}

function fail(context) {
  context.fillStyle = "rgba(0,0,0,0.6)";
  context.fillRect(0,0,canvas.width,canvas.height);

  context.fillStyle = "rgba(255,255,255,1)";
  context.font="50px Georgia";
  context.fillText("Oops, You Lost!",canvas.width / 2 - 200, 300);

  context.font="20px Georgia";
  context.fillText("Press [Enter] to Restart",canvas.width / 2 - 200, canvas.height - 50);
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}