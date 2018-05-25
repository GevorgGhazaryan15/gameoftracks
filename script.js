var side = 32;
var obstacles = [{ x: 10 * side, y: 15 * side }];
var gold = [{ x: 5 * side, y: 7 * side }];
var baza = [{x:1*side,y:0},
            {x:1*side,y:1*side},
            {x:0,y:1*side},
            {x:23*side,y:0},
            {x:23*side,y:1*side},
            {x:24*side,y:1*side},
            {x:0,y:23*side},
            {x:1*side,y:23*side},
            {x:1*side,y:24*side},
            {x:23*side,y:23*side},
            {x:24*side,y:23*side},
            {x:23*side,y:24*side}]

var baza1 =[{x:0,y:0}];
var baza2 =[{x:23*side,y:0}];
var baza3 =[{x:0,y:23*side}];
var baza4 =[{x:23*side,y:23*side}];

var backgroundImg;
var goldImg;
var qarImg;
var baza1img;
var baza2img;
var baza3img;
var baza4img;
var playerImg;




var playerX = 2*side;
var playerY = 0;

var playerHasGold = false;

function setup() {
    createCanvas(side * 25, side * 25);
    backgroundImg=loadImage("grass.png");
    goldImg = loadImage("gold.png");
    qarImg = loadImage("obstacle_1.png");
    baza1img = loadImage("camp_red.png");  
    baza2img = loadImage("camp_blue.png");  
    baza3img = loadImage("camp_green.png");  
    baza4img = loadImage("camp_yellow.png");  
    playerImg = loadImage("player_red_4.png")
    
}

function draw() {
    background(backgroundImg); // Clear the screen

    drawPlayer(); // Draw the player
    
    drawResources(); // Draw the resources

    // Add elses in this if contruction to lock diagonal movement
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && playerX < (width-side)) {
        for (var coords of obstacles) {
            if (Collision_right(coords)) return;
        }
        for (var coords of baza) {
            if (Collision_right(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_right(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerX ++;
    }
    else if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && playerX > 0) {
        for (var coords of obstacles) {
            if (Collision_left(coords)) return;
        }
         for (var coords of baza) {
            if (Collision_left(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_left(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerX --;
    }
    else if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && playerY > 0) {
        for (var coords of obstacles) {
            if (Collision_up(coords)) return;
        }
        for (var coords of baza) {
            if (Collision_up(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_up(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerY --;
    }
else if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && playerY < (height - side)) {
        for (var coords of obstacles) {
            if (Collision_down(coords)) return;
        }
        for (var coords of baza) {
            if (Collision_down(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_down(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerY ++;
    }
}
