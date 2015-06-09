function Square(x,y,height,width,id){
  Actor.call(this,x,y,height,width,id);
  this.lifeTime = 300;
}

Square.prototype=Object.create(Actor.prototype);
Square.prototype.constructor=Square;

Square.prototype.draw=function(context){
  this.dropTime();
  context.globalAlpha = this.lifeTime / 300;
  // context.fillRect(this.x, this.y, this.width, this.height);
  context.drawImage(wall, this.x, this.y, this.width, this.height);
  context.globalAlpha = 1;
}

Square.prototype.dropTime=function() {
  this.lifeTime--;

  if(this.lifeTime % 100 === 0) {
    console.log(this.id + ": " + this.lifeTime);
  }

  if(this.lifeTime <= 0) {
    myGrid.rmv_actor(this);
  }
}