class Box extends BaseClass{

constructor(x,y,width,height){

super(x,y,width,height);

this.image = loadImage("sprites/wood1.png");

}



}










/*class Box{

constructor(x,y,width,height){

    var boptions = {

       restitution:0.8,
       friction:0.3
        
        
        }

        this.body = Bodies.rectangle(x,y,width,height,boptions)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wood1.png")
        World.add(world,this.body);

}







display(){
    push();
    imageMode(CENTER)
    fill("red")
    stroke("brown")
    strokeWeight(3);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    
    pop();


}



}
*/