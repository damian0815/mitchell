
class Conversation {

	constructor(actor1, actor2, dataJson) {
		this.actor1Id = actor1.id;
		this.actor2Id = actor2.id;
		this.yarnData = dataJson;
		
		this.timer = 0;
		this.text = null;
		this.isFinished = false;
	}
	
	involvesActor(actor) {
		return (this.actor1Id === actor.id) || (this.actor2Id === actor.id);
	} 
	
}
