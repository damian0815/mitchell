class ConversationManager {
	constructor() {
		this.conversations = [];
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

}
