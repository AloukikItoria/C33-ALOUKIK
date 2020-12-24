class Log extends BaseClass{

    constructor(x,y,height,angle){

super(x,y,200,height,angle);

this.image = loadImage("sprites/wood2.png")
angleMode(RADIANS);
Matter.Body.setAngle(this.body,angle)

    }






}




/*class Log{

constructor(x,y,height,angle){


var loption = {

friction:0.1,
restitution:0.1

}

this.body = Bodies.rectangle(x,y,100,height,loption)

this.height = height
this.image = loadImage("sprites/wood2.png")

World.add(world,this.body)


}


display(){

push();
imageMode(CENTER)
fill("brown")
stroke("red")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height)
pop();


}





}*/