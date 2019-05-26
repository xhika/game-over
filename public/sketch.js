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
let ENEMYCOUNT = 30;

let enemies = [];

function draw() {
	console.log(screen);
	if (screen == 0) {
		startScreen();
	} else if (screen == 1) {
		gameStart();
	} else if (screen == 2) {
		endScreen();
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
			enemy.setSpeed(5, 90);
			enemy.mirrorY(-1);
		});

		dino.collide(enemy, hitHead = () => {
			dinoY = dino.position.y;
			enemyY = enemy.position.y;

			if(dinoY < enemyY) {
				enemy.setSpeed(5, 90);
				enemy.mirrorY(-1);
				// enemy.remove();
				HEALTH = HEALTH
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

function mousePressed() {
	setTimeout(function () {
		if (screen == 0) {
			screen = 1;
		} else if (screen == 2) {
			screen = 0;
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
	noLoop();
	textAlign(CENTER);
	textFont('Luckiest Guy');
	textSize(60);
	fill(255);
	text('Game Over :/', width / 2, height / 4);
	text('click to play again', width / 2, height / 2.5);
	screen = 2;
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




