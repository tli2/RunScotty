import static java.lang.System.*;

public class CollisionTest {
	public static void main(String[] args) {
		//Write Unit Tests
		int x1 = 10;
		int y1 = 10;
		int x2 = 15;
		int y2 = 5;
		int radius = 7;
		out.println(didCollide(x1, y1, x2, y2, radius));
		out.println(didCollide(x2, y2, x1, y1, radius));
		x1 = 100;
		y1 = 100;
		x2 = 50;
		y2 = 50;
		out.println(didCollide(x1, y1, x2, y2, radius));
		out.println(didCollide(x2, y2, x1, y1, radius));
		
	}
	public static  boolean didCollide(int x1, int y1, int x2, int y2, int r) {
		int left1 = x1 - r;
		int right1 = x1 + r;
		int top1 = y1 + r;
		int bot1 = y1 - r;
		
		int left2 = x2 - r;
		int right2 = x2 + r;
		int top2 = y2 + r;
		int bot2 = y2 - r;

		boolean xCollide = left1 < left2 && left2 < right1 || left2 < left1 && left1 < right2;
		
		boolean yCollide = top1 > top2 && top2 > bot1 || top2 > top1 && top1 > bot2;
		
		out.printf("%b - %b", xCollide, yCollide);
		return xCollide && yCollide;
	}
}
