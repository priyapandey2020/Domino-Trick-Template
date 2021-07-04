class Domino{
    constructor(x,y,height){
        
        // var options={
        //     restitution: 1,
        //     friction:0.5,
        //     density:0.5
        // }

        // var options={
        //     isStatic:true
        // }

        // var options={
        //     restitution: 1,
        //     isStatic:true
        // }

        // var options{
        //     restitution: 1,
        //     friction:0.5,
        //     density:0.5
        // }

        this.body = Bodies.rectangle(x,y,20, height, options)
        this.height = height
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle*180/PI)
        fill("peachpuff")
        rectMode(CENTER)
        rect(0,0,20, this.height)
        pop()
    }
}