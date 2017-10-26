
class Conversation {

	constructor(actor1, actor2, dataJson) {
		this.actor1Id = actor1.id;
		this.actor2Id = actor2.id;
		this.dataJson = dataJson;
		
		this.timer = 0;
		this.text = null;
		this.isFinished = false;
	}
	
	involvesActor(actor) {
		return (this.actor1Id === actor.id) || (this.actor2Id === actor.id);
	} 
	
	update(dt) {
		if (this.text == null) {
			this.text = g_game.add.text(30, g_game.world.height-50, 'hello');
			this.timer = 5;
		}
		
		this.timer -= dt;
		if (this.timer <= 0) {
			this.text.destroy();
			this.text = null;
			this.isFinished = true;
		}
	}
	
}
