var side = 32;
var obstacles = [{ x: 10 * side, y: 10 * side }];
var gold = [{ x: 5 * side, y: 6 * side }];

var bazaX=0;
var bazaY=0;

var playerX = 2*side;
var playerY = 0;

var playerHasGold = false;

function setup() {
    createCanvas(side * 25, side * 25);
}

function draw() {
    background('#acacac'); // Clear the screen

    drawPlayer(); // Draw the player
    
    drawResources(); // Draw the resources

    // Add elses in this if contruction to lock diagonal movement
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && playerX < (width-side)) {
        for (var coords of obstacles) {
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
