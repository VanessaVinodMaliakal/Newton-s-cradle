class Ball{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.ball=Bodies.rectangle(x,y,width,height,options);
        this.width=50;
        this.height=50;
        this.image=loadImage("ball.jpg");
        fill("black");
        World.add(world,this.ball);
    }
    display(){
       
      imageMode(CENTER);
       image(this.image,this.ball.position.x,this.ball.position.y,this.width,this.height);
    }
}