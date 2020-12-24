class Bird extends BaseClass{


constructor(x,y){
    super(x,y,30,30);

    this.image= loadImage("sprites/bird.png");
    this.smokeImage  =loadImage("sprites/smoke.png")
this.path = []
}

display(){

   // this.body.position.x = mouseX
    //this.body.position.y = mouseY
    super.display();
var position = [this.body.position.x,this.body.position.y]
this.path.push(position )
for(var i=0;i<this.path.length;i=i+1){
image(this.smokeImage,this.path[i][0], this.path[i][1] )

}
}






}



/*class Bird{



constructor(x,y){

var birdoption = {

restitution:0.2


}

this.body = Bodies.rectangle(x,y,20,20,birdoption)
this.image= loadImage("sprites/bird.png");
this.width = 30;
this.height = 30;
World.add(world,this.body) 


}


display(){
this.body.position.x = mouseX
this.body.position.y = mouseY
push();
imageMode(CENTER)
fill("yellow")
stroke("white")
strokeWeight("3")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height);
pop();




}
*/









