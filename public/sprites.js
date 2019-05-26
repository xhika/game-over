function preload() {
	startGameImg = loadImage('../assets/environment/start-screen.png');
	nyan = loadAnimation('../assets/nyan.png');
	fireBall = loadAnimation('../assets/fireball.png');
	environment = loadImage('../assets/environment/Cartoon_Forest_BG_01.png');
	idleDino = loadAnimation('../assets/dino/Idle1.png', '../assets/dino/Idle2.png',
		'../assets/dino/Idle3.png', '../assets/dino/Idle4.png',
		'../assets/dino/Idle5.png', '../assets/dino/Idle6.png',
		'../assets/dino/Idle7.png', '../assets/dino/Idle8.png',
		'../assets/dino/Idle9.png', '../assets/dino/Idle10.png'
	);
	walkingDino = loadAnimation('../assets/dino/Walk1.png', '../assets/dino/Walk2.png',
		'../assets/dino/Walk3.png', '../assets/dino/Walk4.png',
		'../assets/dino/Walk5.png', '../assets/dino/Walk6.png',
		'../assets/dino/Walk7.png', '../assets/dino/Walk8.png',
		'../assets/dino/Walk9.png', '../assets/dino/Walk10.png'
	);
	walkingDino.frameDelay = 5
	runningDino = loadAnimation('../assets/dino/Run1.png', '../assets/dino/Run2.png',
		'../assets/dino/Run3.png', '../assets/dino/Run4.png',
		'../assets/dino/Run5.png', '../assets/dino/Run6.png',
		'../assets/dino/Run7.png', '../assets/dino/Run8.png'
	);
	jumpingDino = loadAnimation('../assets/dino/Jump1.png', '../assets/dino/Jump2.png',
		'../assets/dino/Jump3.png', '../assets/dino/Jump4.png',
		'../assets/dino/Jump5.png', '../assets/dino/Jump6.png',
		'../assets/dino/Jump7.png', '../assets/dino/Jump8.png',
		'../assets/dino/Jump9.png', '../assets/dino/Jump10.png',
	);
	deadDino = loadAnimation('../assets/dino/Dead1.png', '../assets/dino/Dead2.png',
		'../assets/dino/Dead3.png', '../assets/dino/Dead4.png',
		'../assets/dino/Dead5.png', '../assets/dino/Dead6.png',
		'../assets/dino/Dead7.png', '../assets/dino/Dead8.png'
	);
	walkingEnemy = loadAnimation('../assets/enemies/Walk1.png', '../assets/enemies/Walk2.png',
		'../assets/enemies/Walk3.png', '../assets/enemies/Walk4.png',
		'../assets/enemies/Walk5.png', '../assets/enemies/Walk6.png',
		'../assets/enemies/Walk7.png', '../assets/enemies/Walk8.png',
		'../assets/enemies/Walk9.png', '../assets/enemies/Walk10.png'
	);
	attackEnemy = loadAnimation('../assets/enemies/Attack1.png', '../assets/enemies/Attack2.png',
		'../assets/enemies/Attack3.png', '../assets/enemies/Attack4.png',
		'../assets/enemies/Attack5.png', '../assets/enemies/Attack6.png',
		'../assets/enemies/Attack7.png'
	);
}

