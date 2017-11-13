class ConversationManager {
	constructor(game) {
		var conversationManager = this;

		this.conversations = [];
		this.dialogue = new bondage.Dialogue();
		this.currentDialogueNode = null;


		this.dialogue.on('finish', () => {
			console.log("dialogue finished");
			conversationManager.currentDialogueNode = null;
		});
		this.dialogue.on('nodecomplete', (result) => {
			// Called when we finish a node

		});
		
	    this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	    this.enterKey.onDown.add(() => {
	    	conversationManager.stepConversation();
	    });
	    
	    this.conversationRenderer = new ConversationRenderer(game);
	}
	
	addConversation(actor1, actor2, dataJson) {
		var conv = new Conversation(actor1, actor2, dataJson);
		this.conversations.push(conv);
	}

	getConversation(actor1, actor2) {
		var context = this;
		return this.conversations.find(function(conv) {
			return context.canStartConversation(conv) && conv.involvesActor(actor1) && conv.involvesActor(actor2);
		});
	}
	
	canStartConversation(conv) {
		return !conv.isFinished;
	}
	
	startConversation(conv) {
		this.dialogue.load(conv.yarnData);
		this.currentDialogueNode = this.dialogue.run('Start');
		
		this.stepConversation();
	}
	
	stepConversation() {
		if (this.currentDialogueNode != null) {
			var result = this.currentDialogueNode.next().value;
			
			if (result instanceof bondage.LineResult) {
				this.speakLine(result.text);
			} else if (result instanceof bondage.OptionsResult) {
				// Called when there is a choice to be made
				// result.options is a list of options
				for (const option of result.options) {
					console.log("option: " + option);
				}

				// Specify which option is chosen (must be called before the next iteration of the loop)
				console.log(" -> choosing option 0");
				result.choose(result.options[0]);
			} else if (result instanceof bondage.NodeCompleteResult) {
				console.log('complete: ' + result.nodeName);
				this.stepConversation();
			}
		}
	}
	
	speakLine(text) {
		var context = this;
		this.conversationRenderer.speakLine(text, function() { context.stepConversation(); } );
	}

	enterPressed() {
		this.stepConversation();
	}

}
