// Preload animations
function preload() {
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
let y;
let scrollSpeed = 0.5;

// Get viewport
const width = window.innerWidth;
const height = window.innerHeight;

// Movement properties
let GROUND = height / 2 + 300
let JUMP = -10;
let GRAVITY = 0.5;
let JUMPLIMIT = 2
let JUMPQUEUE = 0

function setup() {
	createCanvas(width, height);
	y = width;
	// Center Dino
	dino = createSprite(width / 2, GROUND);
	dino.scale = .3;
	dino.addAnimation('animate', idleDino);

	let randomEnemySpeed = random(1.7);

	for (let i = 0; i < 7; i++) {
		enemy = createSprite(width -random(100- 10000), GROUND);
		enemy.scale = .3;
		enemy.addAnimation('animate', walkingEnemy);
		enemy.setCollider("rectangle", 20, 5, 204, 390);
		enemy.mirrorX(-1);
		enemy.debug = true;
		enemy.setSpeed(randomEnemySpeed, 180)
	}
}

function draw() {
	image(environment, x, 0, width, height);
	image(environment, y, 0, width, height);
	x -= scrollSpeed;
	y -= scrollSpeed;
	if (x < -width) {
		x = width;
	}
	if (y < -width) {
		y = width;
	}
	// Add gravity to dino's position when jumping
	if (dino.position.y < GROUND) {
		dino.velocity.y += GRAVITY
	} else {
		dino.velocity.y = 0
		JUMPQUEUE = 0
	}
	drawSprites();
}
function keyPressed() {
	if (key === 'a' || keyCode === LEFT_ARROW) {
		dino.addAnimation('animate', walkingDino);
		dino.mirrorX(-1);
		dino.setSpeed(1, 180);
	}
	if(key === 'd' || keyCode === RIGHT_ARROW) {
		dino.addAnimation('animate', walkingDino);
		dino.mirrorX(1);
		dino.setSpeed(1, 0);
	}
	if(key === 'w' || keyCode === UP_ARROW) {
		if (JUMPQUEUE < JUMPLIMIT) {
			dino.addAnimation('animate', jumpingDino)
			dino.velocity.y = JUMP;
			JUMPQUEUE++;
		}
	}
	if(keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) {
		dino.addAnimation('animate', runningDino);
		dino.setSpeed(4, 180);
		dino.mirrorX(-1);
	}
	if(keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT)) {
		dino.addAnimation('animate', runningDino);
		dino.setSpeed(4, 0);
	}
	if(key === 's' || keyCode === DOWN_ARROW) {
		dino.addAnimation('animate', walkingDino);
		dino.setSpeed(1, 90);
	}
}
function keyReleased() {
	if(RIGHT_ARROW !== keyDown) {
		dino.addAnimation('animate', idleDino);
		dino.setSpeed(0, 0);
	}
}
