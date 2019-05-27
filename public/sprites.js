function preload() {
	startGameImg = loadImage('../assets/environment/start-screen-min.png');
	environmentLevel1 = loadImage('../assets/environment/environment-1-min.png');
	environmentLevel2 = loadImage('../assets/environment/environment-2-min.png');
	environmentLevel3 = loadImage('../assets/environment/environment-3-min.png');
	nyan = loadAnimation('../assets/environment/nyan-min.png');
	fireBall = loadAnimation('../assets/environment/fireball-min.png');

	idleDino = loadAnimation('../assets/dino/Idle1-min.png', '../assets/dino/Idle2-min.png',
		'../assets/dino/Idle3-min.png', '../assets/dino/Idle4-min.png',
		'../assets/dino/Idle5-min.png', '../assets/dino/Idle6-min.png',
		'../assets/dino/Idle7-min.png', '../assets/dino/Idle8-min.png',
		'../assets/dino/Idle9-min.png', '../assets/dino/Idle10-min.png'
	);
	walkingDino = loadAnimation('../assets/dino/Walk1-min.png', '../assets/dino/Walk2-min.png',
		'../assets/dino/Walk3-min.png', '../assets/dino/Walk4-min.png',
		'../assets/dino/Walk5-min.png', '../assets/dino/Walk6-min.png',
		'../assets/dino/Walk7-min.png', '../assets/dino/Walk8-min.png',
		'../assets/dino/Walk9-min.png', '../assets/dino/Walk10-min.png'
	);
	walkingDino.frameDelay = 5
	runningDino = loadAnimation('../assets/dino/Run1-min.png', '../assets/dino/Run2-min.png',
		'../assets/dino/Run3-min.png', '../assets/dino/Run4-min.png',
		'../assets/dino/Run5-min.png', '../assets/dino/Run6-min.png',
		'../assets/dino/Run7-min.png', '../assets/dino/Run8-min.png'
	);
	jumpingDino = loadAnimation('../assets/dino/Jump1-min.png', '../assets/dino/Jump2-min.png',
		'../assets/dino/Jump3-min.png', '../assets/dino/Jump4-min.png',
		'../assets/dino/Jump5-min.png', '../assets/dino/Jump6-min.png',
		'../assets/dino/Jump7-min.png', '../assets/dino/Jump8-min.png',
		'../assets/dino/Jump9-min.png', '../assets/dino/Jump10-min.png',
	);
	deadDino = loadAnimation('../assets/dino/Dead1-min.png', '../assets/dino/Dead2-min.png',
		'../assets/dino/Dead3-min.png', '../assets/dino/Dead4-min.png',
		'../assets/dino/Dead5-min.png', '../assets/dino/Dead6-min.png',
		'../assets/dino/Dead7-min.png', '../assets/dino/Dead8-min.png'
	);
	walkingEnemy = loadAnimation('../assets/enemies/Walk1-min.png', '../assets/enemies/Walk2-min.png',
		'../assets/enemies/Walk3-min.png', '../assets/enemies/Walk4-min.png',
		'../assets/enemies/Walk5-min.png', '../assets/enemies/Walk6-min.png',
		'../assets/enemies/Walk7-min.png', '../assets/enemies/Walk8-min.png',
		'../assets/enemies/Walk9-min.png', '../assets/enemies/Walk10-min.png'
	);
	attackEnemy = loadAnimation('../assets/enemies/Attack1-min.png', '../assets/enemies/Attack2-min.png',
		'../assets/enemies/Attack3-min.png', '../assets/enemies/Attack4-min.png',
		'../assets/enemies/Attack5-min.png', '../assets/enemies/Attack6-min.png',
		'../assets/enemies/Attack7-min.png'
	);
}

