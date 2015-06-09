function Circle(x,y,height,width,id){
  Actor.call(this,x,y,height,width,id);
}

Circle.prototype=Object.create(Actor.prototype);
Circle.prototype.constructor=Circle;

Circle.prototype.draw=function(context){
  // context.beginPath();
  // context.arc(this.x + this.width / 2, this.y + this.height / 2, this.height / 2, 0, 2 * Math.PI, true);
  // context.closePath();
  // context.fill();

  context.drawImage(dog, this.x, this.y, this.width, this.height);
}

Circle.prototype.move=function(a,b){
  // checks for collision with squares
  var squares = myGrid.getAllSquares();
  var okx = true;
  var oky = true;

  if(a < 0 || a > windowWidth - this.width) {
    okx = false;
  }
  if(b < 0 || b > windowHeight - this.height) {
    oky = false
  }

  for(var i = 0; i < squares.length; i++) {
    if(didCollide(a, this.y, squares[i].get_x(), squares[i].get_y(), 40)) {
      okx = false;
    }
    if(didCollide(this.x, b, squares[i].get_x(), squares[i].get_y(), 40)) {
      oky = false;
    }
  }

  if(okx) {
    this.x = a;
  }
  if(oky) {
    this.y = b;
  }
}