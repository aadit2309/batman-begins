class drops{
    constructor(x,y){
        var options={
            iSstatic:False,
            Friction:0.4
        }
        this.body = bodies.circle(x,y,radius.options);
        World.add(this.body,world);
    }

    draw(){
        background(0);
    Engine.update(engine);
        ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 10, 10);
    }

    update(){
        if(this.body,y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}