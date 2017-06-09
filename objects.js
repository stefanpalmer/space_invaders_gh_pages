// ALIENS
function Alien(x,y) {
    this.x = x;
    this.y = y;
    // direction has the value of 1
    this.direction = 1;

    // Show function - preloaded alien image, its size
    this.show = function () {
        // Built-in function to set center point of image
        imageMode(CENTER);
        // Set size of image
        image(alienImage, this.x, this.y,23,44);
    }

    // x position changes by adding direction
    this.move = function() {
        this.x = this.x + this.direction;
    }

    // y position increases while direction is reversed
    this.downReverse = function() {
        this.y += 10;
        this.direction *= -1;
    }
}

// SPACESHIP
function SpaceShip() {
    // Starting position of spaceship / at center x
    this.x = 350;
    this.y = 460;

    // Show function - color and shape of spaceship
    this.show = function () {
        fill(193,31,55);
        triangle(this.x - 10, this.y + 10, this.x + 10, this.y + 10, this.x, this.y - 10);
    }
}

// MISSILES
function Missile(x,y) {
    this.x = x;
    this.y = y;
    // Initial value of destroy set to false
    this.destroy = false;

    // Show function - color and shape of missile
    this.show = function () {
        fill(181,249,7);
        ellipse(this.x, this.y, 8, 8);
    }

    // Shoot function - y coordinate of missile decreases with each draw() execution
    this.shoot = function(dir) {
        this.y = this.y - 5;
    }

    // Hits function - If distance between bullet and alien reaches value, returns true
    this.hits = function(alien) {
        // dist() function - p5.js function for calculating distance
        var distance = dist(this.x, this.y, alien.x, alien.y);
        if (distance < 17) {
            return true;
        } else {
            return false;
        }
    }

    // GetsBoss function - If distance between bullet and boss reaches value, returns true
    this.getsBoss = function(x, y) {
        var distance = dist(this.x, this.y, x, y);
        if (distance < 25) {
            return true;
        } else {
            return false;
        }
    }
}

// BOSS
function Boss(x, y) {
    this.x = x;
    this.y = y;
    this.direction = -1.5;

    // Show function - size and position of Boss
    this.show = function () {
        imageMode(CENTER);
        image(bossImage, this.x, this.y, 90, 65);
    }

    // Move function - x position changes by adding direction
    this.move = function () {
        this.x = this.x + this.direction;
    }

    // Direction of Boss reversed
    this.reverse = function () {
        this.direction *= -1;
        // If y value is above 30, return to y initial position
        if (this.y > 30) {
            this.y -= 520;
        }
    }

    // Disappear function - increase y position so Boss is off canvas
    this.disappear = function () {
        this.y += 520;
    }
}

// BOSS BULLETS
function BossBullets(x,y) {
    this.x = x;
    this.y = y;

    // Show function - color and shape of Boss Bullet
    this.show = function () {
        fill(251,214,50);
        ellipse(this.x,this.y,11,11);
    }

    // Shoot function - when bullet is shot, its y position increases by 5 with each execution
    this.shoot = function (dir) {
        this.y += 5;
    }

    // Hits function - if distance reaches value, returns true
    this.hits = function(x,y) {
        var distance = dist(this.x, this.y, x, y);
        if (distance < 17) {
            return true;
        } else {
            return false;
        }
    }
}

// YOU WIN
function YouWin(x,y) {
    this.x = x;
    this.y = y;

    // Image appears when show() function is called
    this.show = function() {
        imageMode(CENTER);
        image(youWin, this.x, this.y, 700, 400);
    }
}

// GAME OVER
function GameOver(x,y) {
    this.x = x;
    this.y = y;

    // Image appears when show() function is called
    this.show = function() {
        imageMode(CENTER);
        image(gameOver, this.x, this.y, 700, 500);
    }
}

