class Ground{
    
    //setup part of the class
    constructor(x,y,width,height){
        var options = {
           isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
        
    //draw part of the class
    display(){
        var pos = this.body.position;
        // //to fill color in an object
        // fill("blue");
        // //to color the outline
        // stroke("grey");
        //to make the co-ordinates the center of rectangle, rather than top-left corner
        rectMode(CENTER);
        //display a rectangle
        rect(pos.x,pos.y,this.width,this.height);
     }

}