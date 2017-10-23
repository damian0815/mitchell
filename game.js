var g_game;

function gameFunction() { 

	g_game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	var g_mitchell;
	var g_state;
	var g_deals;
	var g_activeConversation = null;
	var g_conversationManager;

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
		g_conversationManager = new ConversationManager();
		createConversations();
		
		g_game.stage.backgroundColor = '#567622';

	}
	
	
	function createConversations() { 
		var initialConversationJson = g_game.load.json('conversations/initial.json');
		g_conversationManager.addConversation(g_teRangitukehu, g_mitchell, initialConversationJson);
	}

	function update() {

		var dt = this.game.time.elapsed/1000;

		g_mitchell.updateMovement(g_game.input);
		g_mitchell.update(dt);

		const CONVERSATION_DISTANCE_THRESHOLD = 30;

		if (g_activeConversation == null) {
			var mitchellTeRangitukehuDistance = Phaser.Math.distance(g_mitchell.sprite.x,g_mitchell.sprite.y, g_teRangitukehu.sprite.x, g_teRangitukehu.sprite.y);
			if (mitchellTeRangitukehuDistance < CONVERSATION_DISTANCE_THRESHOLD) {
				var nextConversation = g_conversationManager.getConversation(g_teRangitukehu, g_mitchell);
				if (nextConversation != null) {
					g_activeConversation = nextConversation;
				}
			}
		}
		
		if (g_activeConversation != null) {
			g_activeConversation.update(dt);
			if (g_activeConversation.isFinished) {
				console.log('active conversation finished: ' + g_activeConversation);
				g_activeConversation = null;
			}
		}

	}

}

