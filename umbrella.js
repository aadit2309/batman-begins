class umbrella{
        constructor(x,y){
            var options={
                iSstatic:true,
                Friction:0.5
            }
            this.body = Bodies.circle(x,y,10,options);
            
            World.add(World,this.body);
        }
    
        draw(){
        background(0);
        Engine.update(engine);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);
        }
}