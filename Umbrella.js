class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png", 
        "Walking Frame/walking_4.png", "Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
