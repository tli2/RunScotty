function Actors(x,y,height,width,id){
  this.x=x;
  this.y=y;
  this.id=id;
  this.height=height;
  this.width=width;
}

Actors.prototype.get_x=function(){
  return this.x;
}

Actors.prototype.get_y=function(){
  return this.y;
}

Actors.prototype.get_id=function(){
  return this.id;
}

Actors.prototype.get_height=function(){
  return this.height;
}

Actors.prototype.get_width=function(){
  return this.width;
}

Actors.prototype.move=function(a,b){
	this.x=a;
	this.y=b
}

Actors.prototype.draw=function(){

}

function Pitt_Student(x,y,height,width,id){
  Actors.call(this,x,y,height,width,id);
}

Pitt_Student.prototype=Object.create(Actors.prototype);
Pitt_Student.prototype.construtor = Pitt_Student;

Pitt_Student.prototype.draw=function(context){
  context.beginPath();
  context.moveTo(this.x, this.y + this.height);
  context.lineTo(this.x + this.width / 2, this.y);
  context.lineTo(this.x + this.width, this.y + this.height);
  context.closePath();
  context.fill();
}

function Scotty(x,y,height,width,id){
  Actors.call(this,x,y,height,width,id);
}

Scotty.prototype=Object.create(Actors.prototype);
Scotty.prototype.constructor=Scotty;

Scotty.prototype.draw=function(context){
  context.beginPath();
  context.arc(this.x + this.width / 2, this.y + this.height / 2, this.height / 2, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}

function Fence(x,y,height,width,id){
  Actors.call(this,x,y,height,width,id);
}

Fence.prototype=Object.create(Actors.prototype);
Fence.prototype.constructor=Fence;

Fence.prototype.draw=function(context){
  context.fillRect(this.x, this.y, this.width, this.height);
}

function Grid(){
  var grid=new Array();
  this.grid=grid;
}

Grid.prototype.add_actor=function(a){
  this.grid.push(a);
}

Grid.prototype.rmv_actor=function(a){
  for(var i=0;i<grid.length;i++){
    if (this.grid[i].get_id == a.get_id){
      array.splice(i,1);
    }
  }
}

Grid.prototype.getAllTriangles = function() {
  var output = new Array();
  for(var i = 0; i<this.grid.length; i++) {
    if(this.grid[i].construtor === Pitt_Student) {
      output.push(this.grid[i]);
    }
  }
  return output;
}

