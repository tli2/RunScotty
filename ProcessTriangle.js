function selectMoveDirection(listOfPoints, x, y, targetX, targetY, sideLength, translationMagnitude) {

	var possibleDirections = 0; //LRTB



	var test = [x, y - translationMagnitude];
	if(!didCollideWithAnyPoint(test[0], test[1], listOfPoints,sideLength)) {
		possibleDirections |= 1 << 1; //Possible Directions Includes Top
	}
	test = [x, y + translationMagnitude];
	if(!didCollideWithAnyPoint(test[0], test[1], listOfPoints, sideLength)) {
		possibleDirections |= 1 << 0; //Possible Directions Includes Bottom
	}
	test = [x - translationMagnitude, y];
	if(!didCollideWithAnyPoint(test[0], test[1], listOfPoints, sideLength)) {
		possibleDirections |= 1 << 3; //Possible Directions Includes Left
	}
	test = [x + translationMagnitude, y];
	if(!didCollideWithAnyPoint(test[0], test[1], listOfPoints, sideLength)) {
		possibleDirections |= 1 << 2; //Possible Directions Includes Right
	}

	var dx = targetX - x;
	var dy = targetY - y;

	if(possibleDirections == 0) {
		return [0, 0]; //No Direction
	}

	var xMoveDirection = 0;
	var yMoveDirection = 0;
	var signX = dx == 0 ? 0 : Math.abs(dx)/dx; // if( dx == 0) 0 else abs(dx)/dx
	var signY = dy == 0 ? 0 : Math.abs(dy)/ dy;
	
	//Do Optimal Path
	if(Math.abs(dx) > Math.abs(dy)) {
		
		if(signX < 0 && (possibleDirections & (1 << 3)) > 0) {
			xMoveDirection = signX; //left
		} else if(signX > 0 && (possibleDirections & (1 << 2)) > 0) {
			xMoveDirection = signX; //right
		} else { //No Optimal X Component

			if(signY < 0 && (possibleDirections & (1 << 1)) > 0) {
				yMoveDirection = signY; //top
			} else if(signY > 0 && (possibleDirections & (1 << 0)) > 0) {
				yMoveDirection = signY; //bottom
			}
		}
	} else {
		
		if(signY < 0 && (possibleDirections & (1 << 1)) > 0) {
			yMoveDirection = signY; //top
		} else if(signY > 0 && (possibleDirections & (1 << 0)) > 0) {
			yMoveDirection = signY; //bottom
		} else { //No Optimal Y Component
			
			if(signX < 0 && (possibleDirections & (1 << 3)) > 0) {
				xMoveDirection = signX; //left
			} else if(signX > 0 && (possibleDirections & (1 << 2)) > 0) {
				xMoveDirection = signX; //right
			}
		}
	}


	//Do Secondary Path
	if(xMoveDirection == 0 && yMoveDirection == 0) {
		if((possibleDirections & (1 << 2)) > 0) {
			xMoveDirection = 1;
		} else if((possibleDirections & (1 << 1)) > 0) {
			yMoveDirection = -1;
		} else if((possibleDirections & (1 << 3)) > 0) {
			xMoveDirection = -1;
		} else if((possibleDirections & ( 1 << 0)) > 0) {
			yMoveDirection = 1;
		}
	}

	return [xMoveDirection, yMoveDirection];

}


function makeBody (x, y, r) {
	return [x -r, x + r, y - r, y + r];
}
	//Actually set triangle location to new location


function processTriangle(grid, triangle,v,dt) {
	var triangleX = triangle.get_x();
	var triangleY = triangle.get_y();
	var allLocation = grid.getAllTrianglesAndSquares();
	for (var i = 0; i < allLocation.length; i++){
	if (allLocation[i].get_id() == triangle.get_id()){
		allLocation.splice(i,1);
	}	
	}
	var circle = grid.getAllCircles()[0];
	var circleX=circle.get_x();
	var circleY=circle.get_y();
	var MoveDirection = selectMoveDirection(allLocation, triangleX, triangleY, circleX, circleY, 40, v * dt);
	triangleX += MoveDirection[0]*v*dt;
	triangleY += MoveDirection[1]*v*dt;
	triangle.move(triangleX,triangleY);
}




