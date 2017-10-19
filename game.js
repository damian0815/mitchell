function gameFunction() { 

	var g_game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


	var g_mitchell;
	var g_state;

	function preload () {
		console.log('preload');
		Mitchell.preload(g_game);
	}

	function create () {
		console.log('create');
		g_mitchell = new Mitchell(g_game);
		
		g_game.stage.backgroundColor = '#283811';

	}

	function update() {
	
	/*
    if (g_game.input.activePointer.withinGame)
    {
        g_game.input.enabled = true;
        g_game.stage.backgroundColor = '#736357';
    }
    else
    {
        g_game.input.enabled = false;
        g_game.stage.backgroundColor = '#731111';
    }*/

	
		if (g_game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
		{
			g_mitchell.move(-4,0);
		}
		else if (g_game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			g_mitchell.move(4,0);
		}

		if (g_game.input.keyboard.isDown(Phaser.Keyboard.UP))
		{
			g_mitchell.move(0, -4);
		}
		else if (g_game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
		{
			g_mitchell.move(0, 4);
		}

	}

}
