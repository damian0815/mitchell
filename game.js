function gameFunction() { 

        var g_game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

		var g_mitchell;
		var g_state;

        function preload () {
			console.log('preload');
			Mitchell.preload(g_game);
        }

        function create () {
			console.log('create');
			g_mitchell = new Mitchell(g_game);

        }
}