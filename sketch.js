// Preload animations
function preload() {
	startGameImg = loadImage('../assets/environment/start-screen.png');
	nyan = loadAnimation('../assets/nyan.png');
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

// Environment properties
let bgImg;
let x = 0;
let newX;
let scrollSpeed = 0.5;
let welcomScreen = 0;

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
let ENEMYCOUNT = 10;

let enemies = [];

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
		enemy.position.x += random(0, 10000);
		enemy.scale = .3
		enemy.addAnimation('animate', walkingEnemy);
		enemy.setCollider("rectangle", 20, 5, 204, 390);
		enemy.mirrorX(-1);
		enemy.setSpeed(randomEnemySpeed, 180)
		enemies.push(enemy)
	};
}

function draw() {
	if (welcomScreen == 0) {
		startScreen()
	} else if (welcomScreen == 1) {
		gameOn();
		drawSprites();
		collisionDetect();
	}
}

function startScreen() {
	image(startGameImg, x, 0, width, height);
	textAlign(CENTER);
	textSize(60);
	fill(255);
	textFont('Luckiest Guy');
	text('WELCOME TO DINO GAME', width / 2, height / 4)
	text('CLICK TO START', width / 2, height / 2.5);
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

// Detect collision
function collisionDetect() {

// Adds life counter on screen
	textSize(100);
	fill(255);
	textFont('Luckiest Guy');
	text(HEALTH, 100, 100);

	enemies.forEach((enemy) => {
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
					noLoop();
					textFont('Luckiest Guy');
					text('Game Over :/', width / 4, height / 2);
					textSize(100);
					fill(255);
					removeSprite(dino);
					removeSprite(enemy);

				}, 3000);
			}
		});
	});
};

// Resize window
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	setTimeout(function () {
		if (welcomScreen == 0) {
			welcomScreen = 1
		} else if (welcomScreen == 2) {
			welcomScreen = 0
		}
	}, 500);
}

// Movement
function keyPressed() {
	if (keyIsDown(LEFT_ARROW) || key === 'a') {
		dino.addAnimation('animate', runningDino);
		dino.mirrorX(-1);
		dino.setSpeed(4, 180);
		scrollSpeed = 0;
	}
	if (keyIsDown(RIGHT_ARROW) || key === 'd') {
		dino.addAnimation('animate', runningDino);
		dino.mirrorX(1);
		dino.setSpeed(4, 0);
		scrollSpeed = 1.3;
	}
	if (keyIsDown(UP_ARROW) || key === 'w') {
		if (JUMPQUEUE < JUMPLIMIT) {
			dino.addAnimation('animate', jumpingDino)
			dino.velocity.y = JUMP;
			JUMPQUEUE++;
		}
	}
	if (keyIsDown(SHIFT) && key === 'W') {
		if (JUMPQUEUE < JUMPLIMIT) {
			dino.addAnimation('animate', jumpingDino)
			dino.velocity.y = JUMP;
			JUMPQUEUE++;
		}
	}
}

function keyReleased() {
	if (keyCode === UP_ARROW || key === 'w') {
		return false;
	}
	dino.addAnimation('animate', walkingDino);
	dino.setSpeed(0, 0);
	scrollSpeed = 0.5;
}
