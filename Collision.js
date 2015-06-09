function didCollideWithAnyPoint(x1, y1, listOfPoints, r) {
	for (var i = listOfPoints.length - 1; i >= 0; i--) {
		var x2 = listOfPoints[i].get_x();
		var y2 = listOfPoints[i].get_y();
		if(didCollide(x1, y1, x2, y2, r)) {
			console.log("Collision with: " + x1 + "-" + y1 + " :: "+ x2 + "-" + y2 + " :: " + r);
			return true;
		}
	}
	return false;
}

function didCollide( x1,  y1,  x2,  y2,  sideLength) {
	var body1 = makeBody(x1, y1, sideLength);
	var body2 = makeBody(x2, y2, sideLength);
	var LEFT = 0;
    var RIGHT = 1;
	var TOP = 2;
	var BOT = 3;


	//var xCollide = body1[LEFT] < body2[LEFT] && body2[LEFT] < body1[RIGHT] || body2[LEFT] < body1[LEFT] && body1[LEFT] < body2[RIGHT];
	//var yCollide = body1[TOP] < body2[TOP] && body2[TOP] < body1[BOT] || body2[TOP] < body1[TOP] && body1[TOP] < body2[BOT];

	var dH =  Math.max(body1[TOP], body1[BOT], body2[TOP], body2[BOT]) - Math.min(body1[TOP], body1[BOT], body2[TOP], body2[BOT]);
	var dW = Math.max(body1[LEFT], body1[RIGHT], body2[LEFT], body2[RIGHT]) - Math.min(body1[LEFT], body1[RIGHT], body2[LEFT], body2[RIGHT]);

	var yCollide = dH < 2 * sideLength;
	var xCollide = dW < 2 * sideLength;

	return xCollide && yCollide;
}


function makeBody (x, y, sideLength) {
	return [x, x + sideLength, y , y + sideLength];
}