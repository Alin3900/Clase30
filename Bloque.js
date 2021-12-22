class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
       //agregando propiedad visibilidad
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       //agregue la imagen 
        this.image= loadImage("Bloque.png");
        World.add(world, this.body);
        
      }
     
      display(){
        console.log(this.body.speed);
        var pos= this.body.position;
        if(this.body.speed <3){
        //agrgando propiedad visiblity
          this.body.visiblity;
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);

        }
      //if para removerlo 
        else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity); //para desvanecer
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
      }
    }
}