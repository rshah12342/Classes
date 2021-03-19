class Box{
    
    //setup part of the class
    constructor(x,y,width,height){
        var options = {
           restitution: 0.8,
           density:1,
           friction: 9
           
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
        
    //draw part of the class
    display(){
        var pos = this.body.position;
        push();
        //translates the x and y position so that the rect can atually turn
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        //to fill color in an object
        fill("blue");
        //to color the outline
        stroke("grey");
        //to make the co-ordinates the center of rectangle, rather than top-left corner
        rectMode(CENTER);
        //display a rectangle
        rect(0, 0,this.width,this.height);
        pop();

}

}
