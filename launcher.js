class Launcher{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.bodyA = body
        this.pointB = pointB
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
     
     if(this.sling.bodyA){
        var pointA = this.bodyA.position;
     var pointB = this.pointB;
     strokeWeight(4)
     line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
     }
    }