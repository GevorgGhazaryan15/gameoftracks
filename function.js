function getName(msg) {
    window.person = prompt(msg || "Welcome to the game\nChoose a username");
    if (!person) {
        getName("You need to enter the name or you shall not pass !");
    }
}
getName();

function drawPlayer() { // Draw the player
    image(playerImg,playerX,playerY,side,side);
    if (playerHasGold) {
        fill(255, 223, 0); // Gold's color
        rect(playerX + (side / 8), playerY + (side / 8), side - (side / 4), side - (side / 4))
    }
}

function drawResources() { // Draw the resources
    for(var i in gold){
        image(goldImg,gold[i].x,gold[i].y,side,side);
    }
    for(var i in obstacles){
        image(qarImg,obstacles[i].x,obstacles[i].y,side,side);
    }
    image(baza1img,0,0,side*2,side*2);
    image(baza2img,23*side,0,side*2,side*2);
    image(baza3img,0,23*side,side*2,side*2);
    image(baza4img,23*side,23*side,side*2,side*2);
   
    
   
}

// Detect the collision
function Collision_right(coords) {
    var obstacleX = coords.x;
    var obstacleY = coords.y;

    var playerOX = playerX + (side / 2);
    var playerOY = playerY + (side / 2);

    var objectOX = obstacleX + (side / 2);
    var objectOY = obstacleY + (side / 2);

    if (objectOX - playerOX <= side && objectOX - playerOX >= 0) {
        if (Math.abs(playerOY - objectOY) < side) {
            return true;
        }
    }
    return false;
}

function Collision_left(coords) {
    var obstacleX = coords.x;
    var obstacleY = coords.y;

    var playerOX = playerX + (side / 2);
    var playerOY = playerY + (side / 2);

    var objectOX = obstacleX + (side / 2);
    var objectOY = obstacleY + (side / 2);

    if (playerOX - objectOX <= side && playerOX - objectOX >= 0) {
        if (Math.abs(playerOY - objectOY) < side) {
            return true;
        }
    }
    return false;
}

function Collision_up(coords) {
    var obstacleX = coords.x;
    var obstacleY = coords.y;

    var playerOX = playerX + (side / 2);
    var playerOY = playerY + (side / 2);

    var objectOX = obstacleX + (side / 2);
    var objectOY = obstacleY + (side / 2);

    if (playerOY - objectOY <= side && playerOY - objectOY >= 0) {
        if (Math.abs(playerOX - objectOX) < side) {
            return true;
        }
    }
    return false;
}

function Collision_down(coords) {
    var obstacleX = coords.x;
    var obstacleY = coords.y;

    var playerOX = playerX + (side / 2);
    var playerOY = playerY + (side / 2);

    var objectOX = obstacleX + (side / 2);
    var objectOY = obstacleY + (side / 2);

    if (objectOY - playerOY <= side && objectOY - playerOY >= 0) {
        if (Math.abs(playerOX - objectOX) < side) {
            return true;
        }
    }
    return false;
}