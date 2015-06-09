function Triangle(x,y,height,width,id){
  Actor.call(this,x,y,height,width,id);
  this.behind = false;
}

Triangle.prototype=Object.create(Actor.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.draw=function(context){
  // context.beginPath();
  // context.moveTo(this.x, this.y + this.height);
  // context.lineTo(this.x + this.width / 2, this.y);
  // context.lineTo(this.x + this.width, this.y + this.height);
  // context.closePath();
  // context.fill();

  context.drawImage(mit, this.x, this.y, this.width, this.height);
}

Triangle.prototype.move=function(a,b) {
  if(a >= 0 && a <= windowWidth - this.width) {
    this.x=a;
  }
  if(b >= 0 && b <= windowHeight - this.height) {
    this.y=b;
  }

  // check if behind circle
  if(this.x < circle.get_x()) {
    this.behind = true;
  } else {
    this.behind = false;
  }
}