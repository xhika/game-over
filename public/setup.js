function setup() {
	createCanvas(width, height);
	newX = width;

	// Create and position Dino
	dino = createSprite(width / 2, GROUND);
	dino.scale = .3;
	dino.addAnimation('animate', walkingDino);
	dino.setCollider("rectangle", 0, 5, 204, 390);
	dino.addAnimation('dead', deadDino)
	dino.addAnimation('jump', jumpingDino)

	// Create fireball
	fireBalls = createSprite(-100, -100)

	//Create Nyan
	nyanCat = createSprite(width - 100, height / 2);
	nyanCat.scale = 0.3
	nyanCat.addAnimation('animate', nyan);
	nyanCat.setSpeed(random(2, 50), 180)
	nyanCat.mirrorX(-1);

	spawningEnemies();
}

function spawningEnemies() {
	for (let i = 0; i < ENEMYCOUNT; i++) {
		let randomEnemySpeed = random(1, 7);
		let enemy = createSprite(width + 500, GROUND);
		enemy.position.x += random(0, 7000);
		enemy.scale = random(0.2, 0.5);
		enemy.addAnimation('animate', walkingEnemy);
		enemy.setCollider("rectangle", 20, 5, 204, 390);
		enemy.mirrorX(-1);
		enemy.setSpeed(randomEnemySpeed, 180)
		enemies.push(enemy)
	};
}
