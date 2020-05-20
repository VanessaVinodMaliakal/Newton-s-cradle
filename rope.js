class Rope{
    constructor(body1,body2,offsetX){
        this.offsetX=offsetX
         var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.05,
            length:20
            
        }
        this.rope=Constraint.create(options)
     

World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        var Anchor=pointB.x+this.offsetX;
      
        strokeWeight(2.5);
        line(pointA.x,pointA.y,Anchor,pointB.y);
        
    }
}