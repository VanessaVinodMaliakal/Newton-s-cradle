class Holder{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.holder=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        fill("black")
        World.add(world,this.holder);
    }
    display(){
       rectMode(CENTER);
       rect(this.holder.position.x,this.holder.position.y,this.width,this.height);
    }
}