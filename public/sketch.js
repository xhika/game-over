// Environment properties
let x = 0;
let newX;
let scrollSpeed = 0.5;
let screen = 0;

// Get viewport
const width = window.innerWidth;
const height = window.innerHeight;

// Movement properties
let GROUND = height / 2 + 300
let JUMP = -10;
let GRAVITY = 0.4;
let JUMPLIMIT = 2;
let JUMPQUEUE = 0;
let HEALTH = 3;

let WAVES = [
	{ count: 5, speed: { min: 1, max: 7 } },
	{ count: 10, speed: { min: 2, max: 6 } },
	{ count: 20, speed: { min: 4, max: 8 } },
	{ count: 30, speed: { min: 2, max: 10 } },
	{ count: 40, speed: { min: 4, max: 15 } },
	{ count: 50, speed: { min: 10, max: 20 } },
];
let LASTWAVE = false;
let WAVEDELAY = 200;
let WAVEDELAYITERATION = 0;
let KILLCOUNT = 0;

let enemies = [];

function draw() {
	if (screen == 0) {
		startScreen();
	} else if (screen == 1) {
		gameStart();
	} else if (screen == 2) {
		endScreen();
	}

	if (LASTWAVE !== false && enemies.length <= 0) {
		WAVEDELAYITERATION++
		if (WAVEDELAYITERATION > WAVEDELAY) {
			spawningEnemies(LASTWAVE + 1);
			WAVEDELAYITERATION = 0
		}
	}

	if (enemies.length > 0) {
		removeOutsiders();
	}
}

function gameStart() {
	gameOn();
	drawSprites();
	collisionDetect();
}

function gameOn() {
	image(environment, x, 0, width, height);
	image(environment, newX, 0, width, height);
	x -= scrollSpeed;
	newX -= scrollSpeed;

	if (x < -width) {
		x = width;
	}
	if (newX < -width) {
		newX = width;
	}
	// Add gravity to dino's position when jumping
	if (dino.position.y < GROUND) {
		dino.velocity.y += GRAVITY
	} else {
		dino.velocity.y = 0
		JUMPQUEUE = 0
	}
	// Push dino back to prevent getting out of view
	if (dino.position.x < 0) {
		dino.position.x = 40;
	}
	if (dino.position.x > width) {
		dino.position.x += -5;
	}
}

function collisionDetect() {
// Adds life counter on screen
	textSize(100);
	fill(255);
	textFont('Luckiest Guy');
	text(HEALTH, 100, 100);

	enemies.forEach((enemy) => {
		fireBalls.collide(enemy, rip = () => {
			fireBalls.remove();
			isDead(enemy);
		});

		dino.collide(enemy, hitHead = () => {
			dinoY = dino.position.y;
			enemyY = enemy.position.y;

			if(dinoY < enemyY) {
				isDead(enemy);
				HEALTH = HEALTH;
			}
		});

		dino.collide(enemy, pushBack = () => {
			enemy.addAnimation('animate', attackEnemy);
			dino.velocity.x += -10;
			enemy.position.x += +5;
			dino.velocity.y += -5;

			if (dino.position === GROUND) {
				dino.velocity.y += +15
			}
			if (HEALTH > 0) {
				HEALTH--;
			}
			if (HEALTH === 0) {
				dino.scale = 0.26;
				dino.changeAnimation('dead')
				setTimeout(function () {
					dino.animation.stop();
				}, 500);
				setTimeout(function () {
					endScreen();
				}, 1500);
			}
		});
	});
};
function isDead(enemy) {
	enemy.setSpeed(5, 90);
	enemy.mirrorY(-1);

	removeEnemy(enemy);
	setTimeout(function () {
		enemy.remove();
	}, 600);

	KILLCOUNT++
	fill(255)
	textSize(100)
	text(KILLCOUNT)
	console.log('Killed ' + KILLCOUNT)
}
function removeEnemy(enemy) {
	// Iterating through enemies to find the victim's index
	let index = enemies.findIndex((target) => {
		return target.depth === enemy.depth;
	});

	delete enemies[index];

	// Reindex enemies array
	enemies = enemies.filter(val => val);
}
function removeOutsiders() {
	enemies.forEach((enemy) => {
		if(enemy.position.x < 0) {
			removeEnemy(enemy);
			enemy.remove();
		}
	})
}
function mousePressed() {
	setTimeout(function () {
		if (screen == 0) {
			screen = 1;
		} else if (screen == 2) {
			screen = 0;
			loop();
		}
	}, 500);
}

function startScreen() {
	image(startGameImg, x, 0, width, height);
	textAlign(CENTER);
	textSize(60);
	fill(255);
	textFont('Luckiest Guy');
	text('WELCOME TO DINO GAME', width / 2, height / 4);
	text('CLICK TO START', width / 2, height / 2.5);
}


function endScreen() {
	screen = 2;
	noLoop();
	textAlign(CENTER);
	textFont('Luckiest Guy');
	textSize(60);
	fill(255);
	text('Game Over :/', width / 2, height / 4);
	text('click to play again', width / 2, height / 2.5);
};

function DRACARYS() {
	if (key === 'x') {
		fireBalls = createSprite(dino.position.x + 10, dino.position.y);
		fireBalls.scale = 0.1
		fireBalls.addAnimation('animate', fireBall);
		fireBalls.setCollider("circle", 0, 0, 250);
		fireBalls.setSpeed(7, 0);
	}
}

// Resize window
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}




