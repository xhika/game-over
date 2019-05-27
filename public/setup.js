function setup() {
	createCanvas(width, height);
	newX = width;

	// Create and position Dino
	dino = createSprite(width / 2, GROUND);
	dino.scale = .3;
	dino.addAnimation('walk', walkingDino)
	dino.setCollider('rectangle', 0, 5, 204, 390);
	dino.addAnimation('dead', deadDino)
	dino.addAnimation('jump', jumpingDino)
	dino.addAnimation('run', runningDino)

	// Create fireball
	fireBalls = createSprite(-100, -100)

	// Create Nyan
	nyanCat = createSprite(width + 600, height / 2);
	nyanCat.scale = 0.3
	nyanCat.addAnimation('animate', nyan);
	nyanCat.setSpeed(random(10, 20), 180)
	nyanCat.mirrorX(-1);

	spawningEnemies(0);
}

function spawningEnemies(waveIndex) {
	let WAVE = WAVES[waveIndex]
	console.log('WAVE ' + waveIndex)
	for (let i = 0; i < WAVE.count; i++) {
		let randomEnemySpeed = random(WAVE.speed.min, WAVE.speed.max);
		let enemy = createSprite(width + 500, GROUND);
		enemy.position.x += random(1200, 1500);
		enemy.scale = random(0.2, 0.5);
		enemy.addAnimation('animate', walkingEnemy);
		enemy.setCollider('rectangle', 20, 5, 204, 390);
		enemy.mirrorX(-1);
		enemy.setSpeed(randomEnemySpeed, 180)
		enemies.push(enemy)
		WAVESCOUNT++;
	};
	LASTWAVE = waveIndex;
}
