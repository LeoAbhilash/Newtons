class rope {
    constructor(bodyA,bodyB,x,y){
        this.x=x
        this.y=y
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.x,y:this.y}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position;
            strokeWeight(4);

            line(pointA.x, pointA.y,pointB.x+this.x, pointB.y+this.y);
        
    }
    
}