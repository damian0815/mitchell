class ConversationRenderer {
	constructor(game) {
		this.game = game;
		
		this.fullText = '';
		this.visibleText = '';
		
		var style = { font: '30pt Courier', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: game.width-(32*2) };
		this.text = game.add.text(32, 380, '', style);
	}
	
	updateLine() {
		if (this.visibleText.length < this.fullText.length) {
			this.visibleText = this.fullText.substr(0, this.visibleText.length + 1);
			this.text.setText(this.visibleText);
		} else {
			this.lineDoneCallback();
		}
	}
	
	speakLine(text, lineDoneCallback) {
		this.fullText = text;
		this.visibleText = '';
		this.lineDoneCallback = lineDoneCallback;
		this.game.time.events.repeat(80, text.length + 1, this.updateLine, this);
	
	}
	
}