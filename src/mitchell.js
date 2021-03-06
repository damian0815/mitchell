// Henry Mitchell
// Land Purchase Officer responsible for much of the negotiations under which parts of the Ngati Awa 'southern' blocks were alienated to the Crown

class Mitchell {


	constructor(game) {
		this.id = 'mitchell';
		this.sprite = game.add.sprite(0,0,'mitchell');
		
		this.velocity = { x: 0, y: 0};
	}

	update(dt) {
		const DECELERATION = 10;
		this.velocity.x -= this.velocity.x * DECELERATION * dt;
		this.velocity.y -= this.velocity.y * DECELERATION * dt;

		this.sprite.x += this.velocity.x * dt;
		this.sprite.y += this.velocity.y * dt;
	}
	
	move(x, y) {
		this.velocity.x += x;
		this.velocity.y += y;
	}
	
	updateMovement(input) {
		const ACCELERATION = 30;
		if (input.keyboard.isDown(Phaser.Keyboard.LEFT))
		{
			this.move(-ACCELERATION,0);
		}
		else if (input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			this.move(ACCELERATION,0);
		}

		if (input.keyboard.isDown(Phaser.Keyboard.UP))
		{
			this.move(0, -ACCELERATION);
		}
		else if (input.keyboard.isDown(Phaser.Keyboard.DOWN))
		{
			this.move(0, ACCELERATION);
		}
	}
};

Mitchell.preload = function(game) {
	game.load.image('mitchell', 'assets/mitchell.png');
}

