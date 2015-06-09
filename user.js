function init_user() {
  window.addEventListener("keydown", doKeyDown);
  window.addEventListener("mousedown", doMouseDown); 
}

function doKeyDown(e) {
  // console.log("Accepted Keypress");
  // W key
  if(e.keyCode == 87) {
    moveByDirection(circle, 0, -1);
    console.log("W");
  }

  // A key
  if(e.keyCode == 65) {
    moveByDirection(circle, -1, 0);
    console.log("A");
  }

  // S key
  if(e.keyCode == 83) {
    moveByDirection(circle, 0, 1);
    console.log("S");
  }

  // D key
  if(e.keyCode == 68) {
    moveByDirection(circle, 1, 0);
    console.log("D");
  }

  if(notStarted) {
    startGame();
  }

  if(e.keyCode == 13 && done) {
    location.reload();
  }
}

function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function doMouseDown(e) {
  var mousePos = getMousePos(canvas, e);

  var newSquare = new Square(mousePos.x - 20, mousePos.y - 20, 40, 40, squareIndex);
  var ok = true;

  var triangles = myGrid.getAllTriangles();
  for(var i = 0; i < triangles.length; i++) {
    if(didCollide(newSquare.get_x(), newSquare.get_y(), triangles[i].get_x(), triangles[i].get_y(), 40)) {
      ok = false;
    }
  }

  var squares = myGrid.getAllSquares();
  for(var i = 0; i < squares.length; i++) {
    if(didCollide(newSquare.get_x(), newSquare.get_y(), squares[i].get_x(), squares[i].get_y(), 40)) {
      ok = false;
    }
  }

  if(didCollide(newSquare.get_x(), newSquare.get_y(), circle.get_x(), circle.get_y(), 40)) {
    ok = false;
  }

  if(ok) {
    myGrid.add_actor(newSquare);
    squareIndex++;
  }
}