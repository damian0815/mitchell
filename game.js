function gameFunction() { 

	var g_game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


	var g_mitchell;
	var g_state;
	var g_deals;

	function preload () {
		console.log('preload');
		Mitchell.preload(g_game);
		TeRangitukehu.preload(g_game);
	}

	function create () {
		console.log('create');
		g_mitchell = new Mitchell(g_game);
		g_teRangitukehu = new TeRangitukehu(g_game);
		
		g_deals = [];
		
		g_game.stage.backgroundColor = '#567622';

	}

	function update() {

		var dt = 1/60;

		g_mitchell.updateMovement(g_game.input);
		g_mitchell.update(dt);


	}

	function render() {
		
	}


}

