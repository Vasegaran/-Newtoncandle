class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIE
		rope1 = Matter.Constraint.create({
			pointA:{x:320 ,y:250},
			bodyB:bob1,
			pointB:{x:320 ,y:575},
			length:40,
			stiffness:0.1
		  });
		  World.add(world,rope1);
				
					 
		  rope2 = Matter.Constraint.create({
			pointA:{x:360, y:250},
			bodyB:bob1,
			pointB:{x:360 ,y:575},
			length:40,
			stiffness:0.1
		  });
		  World.add(world,rope2);	
	}

}