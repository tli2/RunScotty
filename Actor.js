function Actor(x,y,height,width,id){
  this.x=x;
  this.y=y;
  this.id=id;
  this.height=height;
  this.width=width;
}

Actor.prototype.get_x=function(){
  return this.x;
}

Actor.prototype.get_y=function(){
  return this.y;
}

Actor.prototype.get_id=function(){
  return this.id;
}

Actor.prototype.get_height=function(){
  return this.height;
}

Actor.prototype.get_width=function(){
  return this.width;
}

Actor.prototype.move=function(a,b){
  if(a >= 0 && a <= windowWidth - this.width) {
    this.x=a;
  }
	if(b >= 0 && b <= windowHeight - this.height) {
	  this.y=b;
  }
}

Actor.prototype.draw=function(){}