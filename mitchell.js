
class Mitchell {
	constructor(game) {
		this.m_sprite = game.add.sprite(0,0,'mitchell');
	}

};

Mitchell.preload = function(game) {
	game.load.image('mitchell', 'assets/mitchell.png');
	console.log('Mitchell.Preload');
}

