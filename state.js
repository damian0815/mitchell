
class TangateWhenuaState {
	constructor() { 
		this.m_population = 5000;
		this.m_cohesiveness = 1;
		this.m_crownTrust = 0.1;		
	}
	
};

class CrownState {
	constructor() { 
		this.m_landPurchased = 0;
		this.m_moneySpent = 0;
	
		this.m_moneyAvailable = 0;
	}
	
};


class State {
	constructor() {
		this.m_crownState = new CrownState();
		this.m_twState = new TangateWhenuaState();
		this.m_date = new Date(1879, 1, 1);
	}
	
};

