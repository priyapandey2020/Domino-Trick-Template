class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      // this.body = Bodies(x,y,width,height,options);
      // this.width = width;
      // this.height = height;
      // World.add(world);
      
      // this.body = Bodies.rectangle(x,y,options);
      // this.width = height;
      // this.height = width;
      // World.add(world, this.body);

      // this.body = Bodies.circle(x,y,width,height,options);
      // this.width = width;
      // this.height = height;
      // World.remove(world, this.body);

      // this.body = Bodies.rectangle(x,y,width,height,options);
      // this.width = width;
      // this.height = height;
      // World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
