class TeRangitukehu {
	constructor(game) {	
		this.id = 'terangitukehu';

		this.sprite = game.add.sprite(game.width-50,game.height/2-32/2,'terangitukehu');
	}


}

TeRangitukehu.preload = function(game) {
	game.load.image('terangitukehu', 'assets/terangitukehu.png');
}
