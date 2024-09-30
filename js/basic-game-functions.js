function Entity(elemnt) {
    (this.x = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("left"))),
        (this.width = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("width"))),
        (this.y = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("bottom"))),
        (this.height = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("height")));
}

const player = new Entity("player");

console.log(player);
console.log(wall);
const touchingRight = (entity1, entity2) => {
    return entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingLeft = (entity1, entity2) => {
    return entity1.x >= entity2.x && entity1.x <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingBottom = (entity1, entity2) => {
    return entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};

const checkIftouchWalls = (entity, arr, direction) => {
    for (let item in arr) {
        if (direction == "right") {
            if (touchingRight(entity, arr[item])) {
                return true;
            }
        } else {
            if (touchingLeft(entity, arr[item])) {
                return true;
            }
        }
    }
    return false;
};

const move = (entity, direction, amount = 0) => {
    let movingEntity = document.getElementById("player");
    if (direction == "right") {
        entity.x += amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "left") {
        entity.x -= amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "up") {
        entity.y -= amount;
        movingEntity.style.left = entity.y + "px";
    }
};

let keysPressed = {};

document.addEventListener("keydown", (event) => {
    keysPressed[event.key] = true;
    console.log("keysPressed[event.key]: ", event.key);
});
document.addEventListener("keyup", (event) => (keysPressed[event.key] = false));

const detectMovment = () => {
    if (keysPressed["ArrowRight"] == true) {
        if (!checkIftouchWalls(player, wall, "right")) {
            move(player, "right", 5);
        }
    } else if (keysPressed["ArrowLeft"] == true) {
        if (!(checkIftouchWalls(player, wall, "left") || player.x == 0)) {
            move(player, "left", 5);
        }
    }

    if (keysPressed["ArrowUP"] == true) {
        jump();
    }
};

const GRAVITY = -9.8;
const STARTINGVELOCITY = 44.2718872;
let velocity = STARTINGVELOCITY;

const caculateJump = (velocity) => {
    move(player, "up", velocity);
    velocity += GRAVITY / 20;
    if (touchingBottom(player, player2 || player.y == 0)) {
        clearInterval(JumpTime);
        velocity = STARTINGVELOCITY;
    }
};

const jump = () => {
    if (touchingBottom(player, player2 || player.y == 0)) {
        const JumpTime = setInterval(() => caculateJump(velocity), 50);
    }
};

const constantChecking = setInterval(detectMovment, 50);
