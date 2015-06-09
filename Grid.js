function Grid(){
  var grid=new Array();
  this.grid=grid;
}

Grid.prototype.add_actor=function(a){
  this.grid.push(a);
}

Grid.prototype.rmv_actor=function(a){
  for(var i=this.grid.length - 1; i > 0; i--){
    if (this.grid[i].get_id() == a.get_id()){
      this.grid.splice(i,1);
      break;
    }
  }
}

Grid.prototype.getAllTriangles = function() {
  var output = new Array();
  for(var i = 0; i<this.grid.length; i++) {
    if(this.grid[i].constructor == Triangle) {
      output.push(this.grid[i]);
    }
  }
  return output;
}

Grid.prototype.getAllSquares = function() {
  var output = new Array();
  for(var i = 0; i<this.grid.length; i++) {
    if(this.grid[i].constructor == Square) {
      output.push(this.grid[i]);
    }
  }
  return output;
}

Grid.prototype.getAllTrianglesAndSquares = function() {
  var output = new Array();
  for(var i = 0; i<this.grid.length; i++) {
    if(this.grid[i].constructor == Square || this.grid[i].constructor == Triangle) {
      output.push(this.grid[i]);
    }
  }
  return output;
}

Grid.prototype.getAllCircles = function() {
  var output = new Array();
  for(var i = 0; i<this.grid.length; i++) {
    if(this.grid[i].constructor == Circle) {
      output.push(this.grid[i]);
    }
  }
  return output;
}
