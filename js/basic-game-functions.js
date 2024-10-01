function Entity(elemnt) {
    this.id = elemnt;
    (this.x = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("left"))),
        (this.width = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("width"))),
        (this.y = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("bottom"))),
        (this.height = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("height")));
}

const player = new Entity("player");

const touchingRight = (entity1, entity2) => {
    return entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingLeft = (entity1, entity2) => {
    return entity1.x >= entity2.x && entity1.x <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingBottom = (entity1, entity2) => {
    return (
        entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y <= entity2.y + entity2.height
    );
};

const checkIfTouchWalls = (entity, arr, direction) => {
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

const checkIfTouchFloor = (entity, arr) => {
    for (let item in arr) {
        if (touchingBottom(entity, arr[item])) {
            return true;
        }
    }
    return false;
};

const move = (entity, direction, amount = 0) => {
    let movingEntity = document.getElementById(player.id);
    if (direction == "right") {
        entity.x += amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "left") {
        entity.x -= amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "up") {
        entity.y += amount;
        movingEntity.style.bottom = entity.y + "px";
    }
};

let keysPressed = {};

document.addEventListener("keydown", (event) => {
    keysPressed[event.code] = true;
    console.log("keysPressed[event.code]: ", event.code);
});
document.addEventListener("keyup", (event) => (keysPressed[event.code] = false));

const GRAVITY = -5;
const STARTINGVELOCITY = 45;
let velocity = STARTINGVELOCITY;
let jumpIntervalId;
let isJumping = false;

const caculateJump = () => {
    isJumping = true;
    move(player, "up", velocity);
    velocity += GRAVITY;
    if (checkIfTouchFloor(player, wall)) {
        console.log("jumpIntervalId: ", jumpIntervalId);
        clearInterval(jumpIntervalId);
        velocity = STARTINGVELOCITY;
        isJumping = false;
    }
};

const jump = () => {
    if (checkIfTouchFloor(player, wall)) {
        jumpIntervalId = setInterval(() => caculateJump(), 50);
    }
};

const CONTAINERWIDTH = parseInt(getComputedStyle(document.getElementsByClassName("game-floor-container")[0]).getPropertyValue("width"));

const detectMovment = () => {
    if (keysPressed["ArrowRight"] == true) {
        if (!(checkIfTouchWalls(player, wall, "right") || player.x + player.width == CONTAINERWIDTH)) {
            move(player, "right", 5);
        }
    } else if (keysPressed["ArrowLeft"] == true) {
        if (!(checkIfTouchWalls(player, wall, "left") || player.x == 0)) {
            move(player, "left", 5);
        }
    }

    if (keysPressed["ArrowUp"] == true && isJumping == false) {
        jump();
    }
};

const constantChecking = setInterval(detectMovment, 50);
