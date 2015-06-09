//Highest Level
function think(grid, v, dt) {
	//Move Triangles
	moveTriangles(grid, v, dt);


}

function moveTriangles (grid, v, dt) {
	//for each Triangle in grid calculate new location
	var triangles = grid.getAllTriangles();
	for(var i = 0; i < triangles.length; i++) {
		processTriangle(grid, triangles[i],v,dt);	
	}
}




