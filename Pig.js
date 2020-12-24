class Pig extends BaseClass{

constructor(x,y){
 super(x,y,20,20);

 this.image = loadImage("sprites/enemy.png")
this.Visibility= 255;
}

display(){

//console.log(this.body.speed)


if(this.body.speed<5){
    super.display();
}
else{
World.remove(world, this.body)
push();
this.Visibility= this.Visibility-10;
tint(255, this.Visibility)
image(this.image, this.body.position.x,this.body.position.y,this.width,this.height)
pop();
}


}



score(){
if(this.Visibility<0 && this.Visibility>-1005){

    score= score+1;
}


}

 

}








/*class Pig{

constructor(x,y){


var poption = {

isStatic:false,

restitution:0.5


}

this.body = Bodies.rectangle(x,y,20,20,poption);
this.width = 20;
this.height = 20;
this.image= loadImage("sprites/enemy.png")
World.add(world,this.body)



}


display(){
push();
imageMode(CENTER)
fill("green");
stroke("lightgreen");
strokeWeight("2")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.width,this.height);
pop();






}





}
*/