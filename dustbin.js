class dustbin{
    constructor(x, y){

        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;
        this.BottomBody= Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic: true} );
	//Bottom. shapeColor= "blue";	
	World. add(world, this.BottomBody);
	this.LeftBody = Bodies.rectangle( this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight,{isStatic: true} );
	//Left. shapeColor = "blue";
	World.add(world, this.LeftBody);
	this.RightBody =Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2,  this.wallThickness, this.dustbinHeight, {isStatic: true} );
	//Right.shapeColor = "blue";
	World.add(world, this.RightBody);
        Matter.Body.setAngle(this.LeftBody, this.angle);
        Matter.Body.setAngle(this.RightBody, this.angle);
        
    }
    display(){
    var posLeft = this.LeftBody.position;
    var posRight = this.RightBody.position;
    var posBottom = this.BottomBody.position;
    push();
    translate(posLeft.x, posLeft.y);
    rotate(this.angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    rect(0,0, this.wallThickness, this.dustbinHeight);
    pop();

    push();
    translate(posRight.x, posRight.y);
    rotate(-1 *this.angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    rect(0,0, this.wallThickness, this.dustbinHeight);
    pop();
   

    push();
    translate(posBottom.x, posBottom.y);
    angleMode(RADIANS);
    rectMode(CENTER);
    rect(0,0, this.dustbinWidth, this.wallThickness);
    pop();

}
}