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
}

// Environment properties
let bgImg;
let x = 0;
let y;
let scrollSpeed = 1;

// Get viewport
const width = window.innerWidth;
const height = window.innerHeight;


function setup() {
	createCanvas(width, height);
	y = width;
	// Center Dino
	dino = createSprite(width / 2, height / 2 + 300);
	dino.scale = .3;
	dino.addAnimation('animate', idleDino);
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
		dino.addAnimation('animate', jumpingDino)
		dino.setVelocity(5,-5)
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
