
class Mitchell {

	constructor(game) {
		this.m_sprite = game.add.sprite(0,0,'mitchell');
	}

	move(x,y) {
		this.m_sprite.x += x;
		this.m_sprite.y += y;
	}

};

Mitchell.preload = function(game) {
	game.load.image('mitchell', 'assets/mitchell.png');
	console.log('Mitchell.Preload');
}

