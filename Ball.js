class Ball {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0.8,
            density:1.2,
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,this.r, options);
        World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}